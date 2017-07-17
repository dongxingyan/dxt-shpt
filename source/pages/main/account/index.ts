import {Page, IPageParams, page} from "../../../common/page";
import IAngularEvent = angular.IAngularEvent;
import ITimeoutService = angular.ITimeoutService;

require.keys().filter(x => /^\.\/[^\/]+(\/index)?\.(js|ts)$/.test(x)).forEach(x => require(x));

require('./style.styl');

interface IAccountPageParams extends IPageParams {
    page: string;
}

@page({
    // 模板
    template: require('./tmpl.html'),
    // 路由参数，写在这里，可以从this.params中获取。
    params: ['page'],
    // 依赖注入，在init函数的参数表中可以获取。
    requires: ['$timeout'],
    // 这一页的标题
    title: '电信通-商户平台'
})
    /**
     * 页面类
     *
     * 1 会根据类名自动完成配置路由等功能。
     *      比如MainOrgPage就会生成一个状态名为“main.validate_sucessful”，url为“/main/page”的路由。(Page会被忽略)
     *      注意，如果输入的是MainOrg_ManPage的话，状态名会是"main.validate_sucessful-man"，url会是“/main/validate_sucessful-man”。
     *      也就是类名中的下划线“_”会被解析成连接符“-”。
     *      Page<IOrgPageParams>里面的IOrgPageParams用来指定这个页面所需要的路由参数，见上方的interface接口定义。
     *
     *  2 Page的对象会自带几个字段，分别是：
     *      1 scope $scope，作用域
     *      2 uiState $state，ui-router的路由服务
     *      3 params $stateParams，路由参数
     *      4 session SessionService，会话服务（项目位置common/session.ts），存储了这次会话的一些全局数据，比如token。
     *      5 remote RemoteService，远程接口服务（项目位置common/remote/*），存储了一些网络访问的函数，服务器数据在这里获取。
     *
     *   3 页面类的对象在模板上用vm表示。用   {{vm.**}}   这种方式做绑定就可以了。
     */
class MainAccountPage extends Page<IAccountPageParams> {
    visible = false;//显示已使用弹框
    visible1 = false;//显示确认弹框
    visible2 = false;//显示验证成功弹框
    visible3 = false;//券号输入错误时弹框
    vCode:string;//输入的消费券号
    verificationStatus = 1
    pageSize = 8;
    info = []
    ticketInfo
    pager: any[] = [];
    total
    current
    timeout

    init(timeout: angular.ITimeoutService) {
        this.timeout = timeout;
        this.scope.$watch('vm.vCode', (value) => {
        })
        this.remote.record(this.verificationStatus, this.pageSize, this.params.page)
            .then((res) => {
                if (res.data.code == 102) {
                    this.uiState.go('login')
                }
                else if (res.data.code == 200) {
                    this.info = res.data.data;
                    this.total = res.data.pageEntity.totalPageSize;
                    this.current = res.data.pageEntity.page;
                    this.pager = this.paging(this.total, this.current)
                }
            })
    }

    //输入框中的数字需要四位隔开
    format() {
            var v = this.vCode;
            if (/\S{5}/.test(v)) {
                this.vCode = v.replace(/\s/g, '').replace(/(.{4})/g, "$1 ");

        }
    };

    //清空输入框输入的内容
    clear() {
        this.vCode = ''
    }

    //验证单条消费券
    async validate() {
        console.log(this.vCode.replace(/\s/g, ""));
        let res = await this.remote.validate(this.vCode.replace(/\s/g, ""));

        if (res.data.code == 102) {
            this.uiState.go('login')
        }
        else if (res.data.code == 200) {
            this.ticketInfo = res.data.data;
            console.log(this.ticketInfo)
            if (this.ticketInfo == null) {//输入了错误的消费券号
                this.visible3 = true;
            }
            else {
                if (res.data.data.verificationStatus == 0) {
                    this.visible = true;//未使用
                    console.log(res.data.data)
                }
                else {
                    //已使用
                    this.visible1 = true;
                }
            }
        }
    }

    //再次确认消费券
    sure() {
        this.remote.sure(this.vCode.replace(/\s/g, ""))
            .then((res) => {
                if (res.data.code == 200) {
                    this.visible2 = true;
                    this.visible = false;
                    this.timeout(()=>{this.visible2=false},2000)
                }
                else if (res.data.code == 102) {
                    this.uiState.go('login')
                }
                else {
                    this.visible2 = false;
                }
            })

    }

//    点击关闭弹窗
    close() {
        this.visible= false;
        this.visible1 = false;
        this.visible3 = false;
        this.clear();

    }

    close1() {
        this.visible2 = false;
        this.init(this.timeout);
        this.clear()
    }

//  分页显示函数
    paging(total, current) {
        // 小于十页全显示
        if (total <= 10) {
            let arr = [];
            for (var i = 0; i < total; i++) {
                arr[i] = i + 1;
            }
            return arr.map(x => ({
                type: 0,
                value: x,
                isCurrent: x === current
            }))
        }
        // 大于十页部分显示
        else {
            // 当前页号小于等于5
            if (current <= 4) {
                return [1, 2, 3, 4, 5].map<{type,value?,isCurrent?}>(x => ({
                    type: 0,
                    value: x,
                    isCurrent: x === current
                }))
                    .concat([
                        {type: 1},
                        {type: 0, value: total, isCurrent: false}
                    ])
            }
            // 当前页号是最后5页之一
            else if (current > total - 4) {
                return [
                    {type: 0, value: 1, isCurrent: false},
                    {type: 1}
                ]
                    .concat([total - 4, total - 3, total - 2, total - 1, total].map(x => ({
                        type: 0,
                        value: x,
                        isCurrent: x === current
                    })))
            }
            // 其它情况
            else {
                return [
                    {type: 0, value: 1, isCurrent: false},
                    {type: 1}
                ]
                    .concat([current - 2, current - 1, current, current + 1, current + 2].map(x => ({
                        type: 0,
                        value: x,
                        isCurrent: x === current
                    })))
                    .concat([
                        {type: 1},
                        {type: 0, value: total, isCurrent: false}
                    ])
            }
        }
    }

    //下一页
    async nextPage() {
        let maxPage = await this.total;
        let page = parseInt(this.params.page);
        if (page < maxPage) {
            this.uiState.go('main.account', {page: page + 1});
        } else {
            this.uiState.go('main.account', {page: maxPage});
        }
    }

    //上一页
    async  prevPage() {
        let maxPage = this.total
        let page = parseInt(this.params.page);
        console.log(page)
        if (page > 1) {
            this.uiState.go('main.account', {page: page - 1})
        } else {
            this.uiState.go('main.account', {page: 1})
        }
    }

}
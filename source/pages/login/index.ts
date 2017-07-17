import {Page, IPageParams, page} from "../../common/page";
import ITimeoutService = angular.ITimeoutService;
import 'babel-polyfill/lib';

require.keys().filter(x => /^\.\/[^\/]+(\/index)?\.(js|ts)$/.test(x)).forEach(x => require(x));
require('./style.styl');
@page({
    template: require('./tmpl.html'),
    requires: ['$timeout'],
    title: "电信通-商户平台"
})
class LoginPage extends Page<IPageParams> {
    username: string;
    password: string;
    roletype: number;
    errorMsg: string;
    isLogin=false;
    loginText = "登录"
    timeout: ITimeoutService;
    isFailed() {
        if (this.errorMsg) {
            return true;
        }
        else {
            return false;
        }
    }

    async init(timeout: ITimeoutService) {
        this.timeout = timeout;
    }

    waitLogin = false;

    async login() {
        this.errorMsg=null;
        if (navigator.onLine) {
            if (!this.username || !this.password) {
                console.log(this.username, this.password);
                console.log("账号或者密码为空");
                this.errorMsg = "请输入账号和密码";
            }
            else if (!this.waitLogin) {
                console.log(this.loginText)
                this.loginText = "登录中..."
                this.isLogin=true;

                console.log(this.loginText)
                this.waitLogin = true;
                this.errorMsg = null;
                console.debug(this.username, this.password, this.roletype);
                    console.log("定时器开始")
                this.timeout(() => {
                    this.remote.login(this.username, this.password, this.roletype)
                        .then((res) => {
                            console.log("发送请求中");
                            this.waitLogin = false;
                            console.log(res.data);
                            if (res.data.code === 200) {
                                this.session.token = res.data.data.webToken;
                                this.session.userId = res.data.data.userId;
                                this.session.userName = this.username;
                                this.uiState.go('main.account', {page: 0});
                            } else {
                                if (res.data.code === 303) {
                                    console.log("用户不存在")
                                    this.errorMsg = '账号错误，请重新输入'
                                }
                                else {
                                    if (res.data.code === 106)
                                        console.log("用户名或密码错误")
                                    this.errorMsg = "密码错误，请重新输入"
                                }
                            }
                            this.loginText = '登录'
                            this.isLogin=false;
                        });
                }, 500);
            } else {
            }
        }
        else {
            this.loginText='登录中...'
            let a = this.timeout(() => {this.errorMsg="登录超时，请稍后重试";this.loginText="登录";}, 15000);
            this.isLogin=true;
        }
    }
}
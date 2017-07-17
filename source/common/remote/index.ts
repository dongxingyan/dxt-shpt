import * as angular from 'angular';
import { global } from "../global";
import IHttpService = angular.IHttpService;
import IHttpPromise = angular.IHttpPromise;

let dependences = [];
require.keys().filter(x => /^\.\/[^\/]+(\/index)?\.(js|ts)$/.test(x)).forEach(x => {
    let _m = require<any>(x);
    if (_m && _m.name)
        dependences.push(_m.name)
});
dependences = dependences.filter(x => x);
import { initConnection } from "./connection";
import { SessionService } from "../session";

interface ILoginResponse {
    code: number,
    msg: string,
    data: {
        webToken: string,
        userId: string
    }
}
interface ISignOutResponse {
    code: number,
    msg: string,
}
interface IRecordResponse {
    code: number,
    msg: string,
    data: [{
        id: number,
        appId: string,
        appName: string,
        cloudpId: number,
        nickName: string,
        mobile: string,
        openId: string,
        productId: number,
        pruductName: string,
        appTradeNo: string,
        tradeNo: string,
        verificationCode: string,
        verificationStatus: number,
        totalFee: number,
        tradeStatus: number,
        updateTime: string

    }]
    "pageEntity": {
        "page": number,
        "pageSize": number,
        "prePage": number,
        "nextPage": number,
        "startRow": number,
        "maxPage": number,
        "totalPageSize": number
    }

}
interface IValidateResponse {
    code: number,
    msg: string,
    data: {
        id: number,
        appId: string,
        appName: string,
        cloudpId: number,
        nickName: string,
        mobile: string,
        openId: string,
        productId: number,
        appTradeNo: string,
        tradeNo: string,
        verificationCode: string,
        verificationStatus: number,
        totalFee: number,
        tradeStatus: number,
        updateTime: string
    }
}
interface ISureResponse {
    code: number,
    msg: string,
    data: [{
        id: number,
        appId: string,
        appName: string,
        cloudpId: number,
        nickName: string,
        mobile: string,
        openId: string,
        productId: number,
        pruductName: string,
        appTradeNo: string,
        tradeNo: string,
        verificationCode: string,
        verificationStatus: number,
        totalFee: number,
        tradeStatus: number,
        updateTime: string

    }]

}
interface IOrderManagerResponse {
    code: number,
    msg: string,
    data: [{
        id: number,
        appId: string,
        appName: string,
        cloudpId: number,
        nickName: string,
        mobile: string,
        openId: string,
        productId: number,
        pruductName: string,
        appTradeNo: string,
        tradeNo: string,
        verificationCode: string,
        verificationStatus: number,
        totalFee: number,
        tradeStatus: number,
        updateTime: string

    }]
    "pageEntity": {
        "page": number,
        "pageSize": number,
        "prePage": number,
        "nextPage": number,
        "startRow": number,
        "maxPage": number,
        "totalPageSize": number
    }

}


export class RemoteService {
    static $inject = ['$http'];
    constructor(public http: IHttpService) {
        initConnection(http);
    }

    request<T>(callback: () => IHttpPromise<T>) {
        return callback();
    };

    login(username, password, roletype) {
        return this
            .request<ILoginResponse>(() => {
                let url = global.API_PATH + '/v1/backend/sessions';
                console.log("正在发送请求", username, password, roletype);
                return this.http.post<ILoginResponse>(url, {}, {
                    params: {
                        userName: username,
                        password: password,
                        roleType: 2
                    }
                })
            })
    }

    signout(userId, webToken) {
        return this
            .request<ISignOutResponse>(() => {
                let url = global.API_PATH + '/v1/backend/' + sessionStorage.getItem('userId') + '/sessions?' + 'webToken=' + sessionStorage.getItem("token")
                console.log("正在发送请求", userId, webToken);
                return this.http.delete<ISignOutResponse>(url)
            })
    }

    //验证记录
    record(verificationStatus, pageSize, page) {
        return this
            .request<IRecordResponse>(() => {
                let url = global.API_PATH + '/v1/backend/' + sessionStorage.getItem('userId') + '/verifications/?'
                return this.http.get<IRecordResponse>(url, {
                    params: {
                        verificationStatus: verificationStatus,
                        page: page,
                        pageSize: pageSize,
                        webToken: sessionStorage.getItem('token')
                    }
                })
            })
    }

    //验证单条消费券
    validate(vCode) {
        return this
            .request<IValidateResponse>(() => {
                let url = global.API_PATH + '/v1/backend/' + sessionStorage.getItem('userId') + '/verifications/' + vCode + '?webToken=' + sessionStorage.getItem('token');
                return this.http.get<IValidateResponse>(url, {
                    params: {}
                })
            })
    }

    //    确认消费券
    sure(vCode) {
        return this
            .request<ISureResponse>(() => {
                let url = global.API_PATH + '/v1/backend/' + sessionStorage.getItem('userId') + '/verifications/' + vCode + '?webToken=' + sessionStorage.getItem('token');
                return this.http.put<ISureResponse>(url, {
                    params: {}
                })
            })
    }
    //订单管理
    orderManager(page, pageSize) {
        return this
            .request<IOrderManagerResponse>(() => {
                let url = global.API_PATH + '/v1/backend/' + sessionStorage.getItem('userId') + '/payments';
                return this.http.get<IOrderManagerResponse>(url, {
                    params: {
                        page: page,
                        pageSize: pageSize,
                        webToken: sessionStorage.getItem('token')
                    }
                })
            })
    }
}
//订单管理


export let name = 'app.remote';
angular.module(name, [])
    .service('RemoteService', RemoteService);
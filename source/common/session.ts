import * as angular from 'angular';

export let name = 'app.session';
export class SessionService {

    get token() {
        return sessionStorage.getItem('token');
    }

    set token(value: string) {
        console.log(`获得token: ${value}`);
        sessionStorage.setItem('token', value);
    }
    get userName(){
        return sessionStorage.getItem('userName');
    }
    set userName(value:string){
        sessionStorage.setItem('userName',value);
    }
    get userId(){
        return sessionStorage.getItem('userId')
    }
    set userId(value: string){
        console.log("获得userId")
        sessionStorage.setItem('userId',value);
    }
    clear(){
        this.token = '';
        this.userId='';
    }
    constructor() {

    }
}

angular.module(name, [])
    .service('SessionService', SessionService);
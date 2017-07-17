import {Page, IPageParams, page} from "../../common/page";

import './style.styl';

require.keys().filter(x => /^\.\/[^\/]+(\/index)?\.(js|ts)$/.test(x)).forEach(x => require(x));


@page({
    template: require('./tmpl.html')
})
class MainPage extends Page<IPageParams> {
    userName = sessionStorage.getItem('userName')
    userId: string;
    webToken: string;

    isActive(stateName: string | string[]) {
        if (typeof stateName === 'string') {
            return this.uiState.current.name === stateName;
        } else {
            return stateName.filter(name => name === this.uiState.current.name).length > 0;
        }
    }
    //退出登录
    signout() {
        this.remote.signout(this.userId, this.webToken)
            .then((res) => {
                    this.session.clear();
                    this.uiState.go('login');
            })

    }

    init() {
    }
}
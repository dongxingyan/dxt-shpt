import * as angular from 'angular';
export class Global {
    API_PATH = 'https://api-dxt-sit.cloudp.cc:443/cloudp';
    API2_PATH = "...."
}
export let global = new Global();

export let name = 'app.global';
angular.module(name, [])
    .constant('Global', global);

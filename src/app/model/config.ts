import {InjectionToken} from '@angular/core';

export const CONFIG=new InjectionToken<Config>('config-app');

export interface Config {
    baseUrl:string;
    name:string;
}
import {
    NgModule
    , ModuleWithProviders
    , Injector
} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export let injectorSingletonReference: Injector;

import { Post } from './strategies/send/post';
import { Patch } from './strategies/send/patch';
import { Put } from './strategies/send/put';

import { Get } from './strategies/search/get';
import { Delete } from './strategies/search/delete';


@NgModule({
    imports: [
        HttpClientModule
    ],
    exports: [
        HttpClientModule
    ]
})
export class NGenCRUDRequesterModule {

    static forRoot(): ModuleWithProviders<NGenCRUDRequesterModule> {
        return {
            ngModule: NGenCRUDRequesterModule
            , providers: [
                Post
                , Patch
                , Put
                , Get
                , Delete
            ]
        };
    }

    constructor(
        private injector: Injector
    ) {
        injectorSingletonReference = this.injector;
    }

}

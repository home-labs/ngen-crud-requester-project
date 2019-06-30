import {
    NgModule,
    ModuleWithProviders,
    Injector
} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Delete } from './strategies/search/delete';
import { Get } from './strategies/search/get';
import { Patch } from './strategies/send/patch';
import { Post } from './strategies/send/post';
import { Put } from './strategies/send/put';

export let injectorSingletonReference: Injector;


@NgModule({
    imports: [
        HttpClientModule
    ],
    exports: [

    ]
})
export class NGenCRUDRequesterModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NGenCRUDRequesterModule,
            providers: [
                Delete,
                Get,
                Patch,
                Post,
                Put
            ]
        };
    }

    constructor(
        injector: Injector
    ) {
        injectorSingletonReference = injector;
    }

}

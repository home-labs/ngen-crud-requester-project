import {
    NgModule,
    ModuleWithProviders
} from '@angular/core';
import { HttpClientModule, HttpHandler } from '@angular/common/http';

import { Delete } from './strategies/search/delete';
import { Get } from './strategies/search/get';
import { Patch } from './strategies/send/patch';
import { Post } from './strategies/send/post';
import { Put } from './strategies/send/put';


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

}

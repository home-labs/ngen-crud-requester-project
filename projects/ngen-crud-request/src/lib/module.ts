import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
    Search
} from './strategies/search/namespace';
import {
    Send
} from './strategies/send/namespace';

import { GeneralService } from './general-service';
import { ModuleWithProviders } from '@angular/compiler/src/core';


@NgModule({
    imports: [
        HttpClientModule
    ],
    exports: [
        HttpClientModule
    ]
})
export class NGenCRUDRequestModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NGenCRUDRequestModule,
            providers: [
                Search.Delete,
                Search.Get,
                Send.Patch,
                Send.Post,
                Send.Put,
                GeneralService
            ]
        };
    }

}

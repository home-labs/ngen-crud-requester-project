import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
    Search
} from './strategies/search/namespace';
import {
    Send
} from './strategies/send/namespace';

import { GeneralService } from './general-service';


@NgModule({
    imports: [
        HttpClientModule
    ],
    exports: [
        HttpClientModule
    ],
    providers: [
        Search.Delete,
        Search.Get,
        Send.Patch,
        Send.Post,
        Send.Put,
        GeneralService
    ]
})
export class NGenCRUDRequestModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NGenCRUDRequestModule } from 'ngen-crud-request';


@NgModule({
    imports: [
        BrowserModule,
        NGenCRUDRequestModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

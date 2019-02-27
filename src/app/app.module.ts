import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NGenRESTfulCRUDModule } from 'ngen-crud-request';

@NgModule({
    imports: [
        BrowserModule,
        NGenRESTfulCRUDModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

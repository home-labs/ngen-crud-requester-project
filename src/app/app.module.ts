import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { NGenCRUDRequestModule } from 'ngen-crud-request';
import { NGenCRUDRequestModule } from 'projects/ngen-crud-request/src/public_api';

import { AppComponent } from './app.component';


@NgModule({
    imports: [
        BrowserModule,
        NGenCRUDRequestModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

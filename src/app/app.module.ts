import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { NGenCRUDRequesterModule } from 'ngen-crud-requester';
import { NGenCRUDRequesterModule } from 'projects/ngen-crud-requester/src/public_api';

import { AppComponent } from './app.component';


@NgModule({
    imports: [
        BrowserModule,
        NGenCRUDRequesterModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

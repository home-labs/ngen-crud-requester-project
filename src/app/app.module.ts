import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { NGenCRUDRequesterModule } from 'projects/ngen-crud-requester/src/public_api';
import { NGenCRUDRequesterModule } from 'ngen-crud-requester';

import { AppComponent } from './app.component';
import { Services } from './services/namespace';


@NgModule({
    imports: [
        BrowserModule,
        NGenCRUDRequesterModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        Services.Examples
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

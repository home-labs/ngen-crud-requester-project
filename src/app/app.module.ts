import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// import { NGenCRUDRequesterModule } from '@rplaurindo/ngen-crud-requester';
import { NGenCRUDRequesterModule } from 'projects/ngen-crud-requester';

// never use a namespace in a Angular module declaration
// import { Services } from './services/namespace';

import * as Services from './services';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
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

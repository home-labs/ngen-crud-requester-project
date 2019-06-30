import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// import { NGenCRUDRequesterModule } from 'projects/ngen-crud-requester/src/public_api';
import { NGenCRUDRequesterModule } from 'ngen-crud-requester';

// never use a namespace in a Angular module declaration
import { Examples } from './services';


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
        Examples
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

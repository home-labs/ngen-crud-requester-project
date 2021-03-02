import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NGenCRUDRequesterModule } from '@actjs.on/ngen-crud-requester';
// import { NGenCRUDRequesterModule } from 'projects/ngen-crud-requester/ngen-crud-requester';

// never use a namespace in a Angular module declaration
import { Services } from './services/index';


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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NGenCRUDRequesterModule } from '@actjs.on/ngen-crud-requester';

// never use a namespace in a Angular module declaration
import { Services } from './services/namespace';


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

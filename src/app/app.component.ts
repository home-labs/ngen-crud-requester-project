import { Component } from '@angular/core';

import { Services } from './services/index';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent {

    collection!: object[];

    constructor(
        examplesService: Services.Examples
    ) {
        // this.collection = [];

        examplesService.read().then(
            (r: object) => {
                this.collection = r as object[];
            }
        ).catch(
            (e) => {
                console.log(e);
            }
        );
    }

}

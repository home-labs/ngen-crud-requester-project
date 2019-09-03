import { Component } from '@angular/core';

import { Services } from './services/namespace';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent {

    collection: object[];

    constructor(
        examplesService: Services.Examples
    ) {
        examplesService.getAll().then(
            (r: object[]) => {
                this.collection = r;
            }
        ).catch(
            (e) => {
                console.log(e);
            }
        );
    }

}

import { Component } from '@angular/core';

import { Services } from './services/namespace';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {

    collection: object[];

    constructor(
        examplesService: Services.Examples
    ) {
        examplesService.getAll({queryParam1: 1, queryParam2: [1, 2, 3]}).then(
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

import { Component } from '@angular/core';

import { Services } from './services/namespace';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    providers: [
        Services.Examples
    ]
})
export class AppComponent {

    collection: Array<Object>;

    constructor(
        examplesService: Services.Examples
    ) {
        examplesService.searchProxy({}).then(
            (r: Array<Object>) => {
                this.collection = r;
            }
        ).catch(
            (e) => {
                console.log(e);
            }
        );
    }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractSend } from './abstract-send';


@Injectable()
export class Patch extends AbstractSend {

    constructor(
        http: HttpClient
    ) {
        super(http);
    }

    send(url: string, data: Object, options?: Object): Promise<Response> {
        return super.send(url, data, options, 'patch');
    }

}

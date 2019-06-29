# NGenCRUDRequester - Angular Generic Requester to do CRUD

## Requirements

>- Angular 2 or higher.

## Installing

$ npm i ngen-crud-requester --save

## Usage

Import ```NGenCRUDRequesterModule``` from ```ngen-crud-requester``` in your module, and put in the key ```imports``` of metadata from```NgModule```, so import ```NGenCRUDRequester``` in your service and inject the ```GeneralService```, like that:

```typescript
@NgModule({

    imports: [
        NGenCRUDRequesterModule
    ]

})

export  class  YourModule { }
```

```typescript
import { NGenCRUDRequester } from  'ngen-crud-requester';


@Injectable()
class  YourService {

    constructor(private  serviceHelp: NGenCRUDRequester.GeneralService) { }

}
```


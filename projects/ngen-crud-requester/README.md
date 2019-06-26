# NGenCRUDRequester - Angular Generic RESTful to do CRUD

## Requirements

>- Angular 2 or higher.

## Installing

$ npm i ngen-crud-requester --save

## Usage

Import ```NGenCRUDRequestModule``` from ```ngen-crud-requester``` in your module, and put in the key ```imports``` of metadata from```NgModule```, so import ```NGenCRUDRequest``` in your service and inject the ```GeneralService```, like that:


```typescript
@NgModule({

    imports: [
        NGenCRUDRequestModule
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

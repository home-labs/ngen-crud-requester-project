# NGenCRUDRequester - Angular Generic Requester to do CRUD

## Requirements

>- @angular/common and @aAngular/core 5 or higher.

## Installing

$ npm i @actjs.on/ngen-crud-requester --save

## Usage

Import `NGenCRUDRequesterModule` from `@actjs.on/ngen-crud-requester` in your module, and put in the key `imports` of metadata from `NgModule`, so import `NGenCRUDRequester` namespace in your service and extend the `NGenCRUDRequester.AbstractCRUDService<any>` `classGeneralService`, like that:

```typescript
@NgModule({

    imports: [
        NGenCRUDRequesterModule
    ]

})

export  class  YourModule { }
```

```typescript
import { NGenCRUDRequester } from  '@actjs.on/ngen-crud-requester';


@Injectable()
class  YourService extends NGenCRUDRequester.AbstractCRUDService<any> {GeneralService {

	

}
```

Then your service will earn the `protected` methods `create`, `read`, `search`, `searchByHTTPGetVerb`, `update`, `put`, and `delete`.

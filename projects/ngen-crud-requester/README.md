# NGenCRUDRequester - Angular Generic Requester to do CRUD

## Requirements

>- Angular 5 or higher.

## Installing

$ npm i @rplaurindo/ngen-crud-requester --save

## Usage

Import ```NGenCRUDRequesterModule``` from ```@rplaurindo/ngen-crud-requester``` in your module, and put in the key ```imports``` of metadata from```NgModule```, so import ```NGenCRUDRequester``` namespace in your service and extend the ```NGenCRUDRequester.AbstractCRUDService<any>``` class, like that:

```typescript
@NgModule({

    imports: [
        NGenCRUDRequesterModule
    ]

})

export  class  YourModule { }
```

```typescript
import { NGenCRUDRequester } from  '@rplaurindo/ngen-crud-requester';


@Injectable()
class  YourService extends NGenCRUDRequester.AbstractCRUDService<any> {

}
```

Then your service will earn the ```protected``` methods ```create```, ```read```, ```search```, ```searchByHTTPGetVerb```, ```update```, ```put```, and ```delete```.


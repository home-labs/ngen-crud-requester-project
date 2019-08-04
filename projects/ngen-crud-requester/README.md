# NGenCRUDRequester - Angular Generic Requester to do CRUD

## Requirements

>- Angular 4 or higher.

## Installing

$ npm i ngen-crud-requester --save

## Usage

Import ```NGenCRUDRequesterModule``` from ```ngen-crud-requester``` in your module, and put in the key ```imports``` of metadata from```NgModule```, so import ```NGenCRUDRequester``` namespace in your service and extend the ```NGenCRUDRequester.GeneralService```, like that:

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
class  YourService extends NGenCRUDRequester.GeneralService {

	

}
```

Then your service will earn the ```protected``` methods ```create```, ```read```, ```search```, ```update```, ```put``` and ```delete```.


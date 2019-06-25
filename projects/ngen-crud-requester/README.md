# NGenCRUDRequest - Angular Generic RESTful to do CRUD

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
import { NGenCRUDRequest } from  'ngen-crud-requester';


@Injectable()
class  YourService {

    constructor(private  serviceHelp: NGenCRUDRequest.GeneralService) { }

}
```



### To use with a Model and the Abstract Factory Design Pattern

Import ```NGenCRUDRequest``` from ```ngen-crud-requester``` in your model and implement the method ```getConcrete``` implementing the interface ```NGenCRUDRequest.GenericAbstractProduct<T>```, like that:

```typescript
import { NGenCRUDRequest } from  'ngen-crud-requester';


class  YourModel  implements  NGenCRUDRequest.GenericAbstractProduct<YourModel> {

    getConcrete(): YourModel {
        return  this;
    }

}
```

So implements the method ```manufacture``` extending the abstract class ```NGenCRUDRequest.GenericAbstractService<YourModel>```, like that:

```typescript
import { NGenCRUDRequest } from  'ngen-crud-requester';


@Injectable()
class  YourService  extends  NGenCRUDRequest.GenericAbstractService<YourModel> {

    manufacture(response: Response): NGenCRUDRequest.GenericAbstractProduct<YourModel> {

        return  new  YourModel();

    }

}
```

# NGenRESTfulCRUD - Angular Generic RESTful to do CRUD

## Requirements

>- Angular 2 or higher.

## Installing

	$ npm i ngen-restful-crud --save

## Usage

Import ```NGenRESTfulCRUDModule``` from ```ngen-restful-crud``` in your module, and put in the key ```imports``` of ```NgModule``` metadata, so import ```NGenRESTfulCRUD``` in your service and inject the ```GeneralService```, like that:

```typescript
@NgModule({
    imports: [
        NGenRESTfulCRUDModule
    ]
})
export class YourModule { }
```

```typescript
import { NGenRESTfulCRUD } from 'ngen-restful-crud';

@Injectable()
class YourService {

	constructor(private serviceHelp: NGenRESTfulCRUD.GeneralService) { }

}
```

### To use with a Model and the Abstract Factory Design Pattern

Import ```NGenRESTfulCRUD``` from ```ngen-restful-crud``` in your model and implement the ```getConcrete``` method implementing the interface ```NGenRESTfulCRUD.GenericAbstractProduct<T>```, like that:

```typescript
import { NGenRESTfulCRUD } from 'ngen-restful-crud';

class YourModel implements NGenRESTfulCRUD.GenericAbstractProduct<YourModel> {

    getConcrete(): YourModel {
        return this;
    }

}
```

So implements the method ```manufacture``` extending the abstract class ```NGenRESTfulCRUD.GenericAbstractService<YourModel>```, like that:

```typescript
import { NGenRESTfulCRUD } from 'ngen-restful-crud';

@Injectable()
class YourService extends NGenRESTfulCRUD.GenericAbstractService<YourModel> {

    manufacture(response: Response): NGenRESTfulCRUD.GenericAbstractProduct<YourModel> {
        return new YourModel();
    }

}
```


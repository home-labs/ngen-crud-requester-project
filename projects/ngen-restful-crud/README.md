# NGenRESTfulCRUD - Angular Generic RESTful to do CRUD

## Requirements

>- Angular 2 or higher.

## Installing

	$ npm i ngen-restful-crud --save

## Usage

Import ```NGenRESTfulCRUD``` from ```ngen-restful-crud``` in your model and implement the ```getConcrete``` method implementing the ```NGenRESTfulCRUD.GenericAbstractProduct<T>``` interface, like that:

```typescript
import { NGenRESTfulCRUD } from 'ngen-restful-crud';

class MyModel implements NGenRESTfulCRUD.GenericAbstractProduct<MyModel> {

    getConcrete(): MyModel {
        return this;
    }

}
```

So implements the ```manufacture``` method extending the ```NGenRESTfulCRUD.GenericAbstractService<MyModel>``` abstract class, like that:

```typescript
import { NGenRESTfulCRUD } from 'ngen-restful-crud';

@Injectable()
class MyService extends NGenRESTfulCRUD.GenericAbstractService<MyModel> {

    manufacture(response: Response): NGenRESTfulCRUD.GenericAbstractProduct<MyModel> {
        return new MyModel();
    }

}
```


import { Strategies } from './strategies/index';

import { injectorSingletonReference } from './module';
import { AbstractReadingService } from './abstract-reading-service';


export abstract class AbstractCRUDService<T> extends AbstractReadingService<T> {

    private deleteStrategyContext: Strategies.Contexts.Search;

    private patchStrategyContext: Strategies.Contexts.Send;

    private putStrategyContext: Strategies.Contexts.Send;

    constructor() {
        super();

        this.deleteStrategyContext = new Strategies.Contexts
            .Search(injectorSingletonReference.get(Strategies.Search.Delete));

        this.patchStrategyContext = new Strategies.Contexts
            .Send(injectorSingletonReference.get(Strategies.Send.Patch));
        this.putStrategyContext = new Strategies.Contexts
            .Send(injectorSingletonReference.get(Strategies.Send.Put));
    }

    protected create(url: string, data: object, options?: object): Promise<Response> {
        return this.postStrategyContext.send(this.resolveURL(url), data, options);
    }

    protected update(url: string, data: object, options?: object): Promise<Response> {
        return this.patchStrategyContext.send(this.resolveURL(url), data, options);
    }

    protected put(url: string, data: object, options?: object): Promise<Response> {
        return this.putStrategyContext.send(this.resolveURL(url), data, options);
    }

    protected delete(url: string, options?: object): Promise<Response> {
        return this.deleteStrategyContext.search(this.resolveURL(url), options);
    }

}

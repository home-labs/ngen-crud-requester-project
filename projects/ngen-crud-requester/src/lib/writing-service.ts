import { Contexts } from './strategies/contexts/namespace';
import { Search } from './strategies/search/namespace';
import { Send } from './strategies/send/namespace';

import { injectorSingletonReference } from './module';
import { ReadingService } from './reading-service';


export class WritingService<T> extends ReadingService<T> {

    private deleteStrategyContext: Contexts.Search;

    private patchStrategyContext: Contexts.Send;

    private putStrategyContext: Contexts.Send;

    constructor() {
        super();

        this.deleteStrategyContext = new Contexts.Search(injectorSingletonReference.get(Search.Delete));
        this.patchStrategyContext = new Contexts.Send(injectorSingletonReference.get(Send.Patch));
        this.putStrategyContext = new Contexts.Send(injectorSingletonReference.get(Send.Put));
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

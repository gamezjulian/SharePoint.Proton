import { ProtonWidgetService } from '../services';
import KnockoutComponent from './knockoutComponent';
import { iProtonWidget } from '../interfaces';

abstract class ProtonWidget extends KnockoutComponent implements iProtonWidget {

    public Container;
    public Name;

    private templatesItems: any;
    private templatesFile: any;

    public constructor() {
        super();

        ProtonWidgetService.registerWidget(this);
        this.Container = null; 
        this.templatesItems = [];
        this.templatesFile = this.templates();
        this.getTemplates();
    }

    // returns requiered html templates
    protected templates(): any {
        return this.templatesFile = [];
    }

    // compiles templates based on the configured templates and the compiled method provided by the parent
    protected compileTemplate(id, model, selector?): Element {
        var element = null;

        if (selector) {
            element = selector;
        } else {
            element = this.Container;
        }

        var $element = $(element);

        //validate if selector es null
        var template = this.templatesItems.find(x => x.id == id);

        if (template) {
            $element.html(template);
        }

        this.applyBindings(model, element);

        return element;
    }

    // obtains all the templates configured into a html file.
    protected getTemplates(): void {
        this.templatesFile.forEach((item) => {
            var templatesInFile = item(); 
            var allTemplates = $(templatesInFile).find('div');
            allTemplates.toArray().forEach(x => {
                this.templatesItems.push(x);
            });
        });
    }

    public async preRender(): Promise<void> {
        console.log(`proton-widget: ${this.Name} .Pre-render method.`)
        return new Promise<void>((res, rej) => res());
    }

    public async whileRender(): Promise<void> {
        console.log(`proton-widget: ${this.Name} .Render method.`)
        return this.render();
    }

    public abstract async render(): Promise<void>;

    public async postRender(): Promise<void> {
        console.log(`proton-widget: ${this.Name} .Post-render method.`)
        return new Promise<void>((res, rej) => res());
    }
}

export { ProtonWidget }
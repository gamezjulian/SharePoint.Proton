import { WidgetService } from '../services/WidgetService'
import KnockoutComponent from './KnockoutComponent'

export default class WidgetBase extends KnockoutComponent {
    constructor() {
        super();

        WidgetService.registerWidget(this);
        this.container = null;
        this.templatesItems = [];
        this.templatesFile = this.templates();
        this.getTemplates();
    }

    // returns requiered html templates
    templates() {
        return this.templatesFile = [];
    }

    // compiles templates based on the configured templates and the compiled method provided by the parent
    compileTemplate(id, model, selector) {
        var element = null;

        if (selector) {
            element = selector;
        } else {
            element = this.container;
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
    getTemplates() {
        this.templatesFile.forEach((item) => {
            var templatesInFile = item();
            var allTemplates = $(templatesInFile).find('div');
            allTemplates.toArray().forEach(x => {
                this.templatesItems.push(x);
            });
        });

    }

    //Hooks methods

    // runs before the render. Can be used to obtain all the data and set it in class properties
    preRender() {
        return Promise.resolve(this);
    }

    // used to render data based on templates
    render() {
        return Promise.resolve(this);
    }

    // runs after the render function. Used to attach events or to do something once the html was already inserted in the DOM
    postRender() {
        return Promise.resolve(this);
    }
}
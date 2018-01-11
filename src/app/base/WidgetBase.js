import { WidgetService } from '../services/WidgetService'
import KnockoutComponent from './KnockoutComponent'

export default class WidgetBase extends KnockoutComponent {
    constructor() {
        super();

        WidgetService.registerWidget(this);
        this.container = null;
        this.templates = [];
        this.templatesFile = this.templateUrl();
        this.getTemplates();
    }

    // Template methods

    templateUrl() {
        return this.templatesFile = [];
    }

    compileTemplate(id, model, selector) {
        var element = null;

        if (selector) {
            element = $(selector);
        } else {
            element = this.container;
        }

        var $element = $(element);

        //validate if selector es null
        var template = this.templates.find(x => x.id == id);

        if (template) {
            element.html(template);
        }

        return element;
    }

    getTemplates() {
        this.templatesFile.forEach((item) => {
            var templatesInFile = item();
            var allTemplates = $(templatesInFile).find('div');
            allTemplates.toArray().forEach(x => {
                this.templates.push(x);
            });
        });

    }

    //Hooks methods

    preRender() {
        return Promise.resolve(this);
    }

    render() {
        return Promise.resolve(this);
    }

    postRender() {
        return Promise.resolve(this);
    }
}
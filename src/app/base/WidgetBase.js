import { WidgetService } from '../services/WidgetService'
import KnockoutComponent from './KnockoutComponent'

export default class WidgetBase extends KnockoutComponent {
    constructor() {
        super();

        WidgetService.registerWidget(this);
        this.container = null; 
        this.templates = [];
    }

    templateUrl() {
        return this.templatesFile = [];
    }

    compileTemplate(id, model, selector) {

        //validate if selector es null
        this.templatesFile = this.templateUrl();
        this.getTemplates();
        var template = this.templates.find(x => x == id);

        return {};
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

    //hooks methods

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
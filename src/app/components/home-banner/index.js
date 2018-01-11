import WidgetBase from '../../base/WidgetBase';
import { WidgetService } from '../../services/WidgetService';
import * as ko from 'knockout';

export class HomeBanner extends WidgetBase {
    constructor() {
        super();
        this.text = "Julian"
        this.items = ko.observable([{ name: "Julian" }, { name: "Ramiro" }, { name: "Marcelo" }]);
    }

    templates() {
        return [
            () => { return require('./home-banner-template.html') },
            () => { return require('./home-banner-template2.html') }
        ];
    }

    render() {

        var container = this.compileTemplate('banner-container', this);
        this.compileTemplate('banner-subcontainer', this, $(container).find('.container')[0]);
        var promise = new Promise((resolve, reject) => {
            console.log("render function called.");
            resolve(this);
        });

        return promise;
    }
}

WidgetService.registerWidget(HomeBanner);
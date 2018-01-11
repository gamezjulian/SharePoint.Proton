import WidgetBase from '../../base/WidgetBase';
import { WidgetService } from '../../services/WidgetService';
import { BannerService } from './services/bannerService';
import * as ko from 'knockout';

export class HomeBanner extends WidgetBase {
    constructor() {
        super();
        this.text = "Julian"
        this.items = ko.observable([{ name: "Julian" }, { name: "Ramiro" }, { name: "Marcelo" }]);
    }

    templates() {
        return [
            () => { return require('./views/home-banner-template.html') },
            () => { return require('./views/home-banner-template2.html') }
        ];
    }

    render() {

        BannerService.getItems()
            .then(items => {
                var i = items;
            });

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
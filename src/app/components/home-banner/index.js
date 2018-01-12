import WidgetBase from '../../base/WidgetBase';
import { WidgetService } from '../../services/WidgetService';
import { BannerService } from './services/bannerService';
import * as ko from 'knockout';

export class HomeBanner extends WidgetBase {
    constructor() {
        super();

        this.items = [];
    }

    templates() {
        return [
            () => { return require('./views/home-banner-template.html') }
        ];
    }

    render() {

        var promiseFunc = (resolve, reject) => {

            BannerService.getItems()
                .then(items => {

                    this.items = items;
                    var container = this.compileTemplate('banner-container', this);

                    console.log("render function finished.");
                    resolve(this);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                });
        }

        return new Promise(promiseFunc);
    };
}

WidgetService.registerWidget(HomeBanner);
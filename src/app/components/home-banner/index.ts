import WidgetBase from '../../base/WidgetBase';
import { WidgetService } from '../../services/WidgetService';
import { BannerService } from './services/bannerService';

export default class HomeBanner extends WidgetBase {

    private items;

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
                    this.compileTemplate('banner-container', this);

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
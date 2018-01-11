import WidgetBase from '../../base/WidgetBase';
import { WidgetService } from '../../services/WidgetService';

export class HomeBanner extends WidgetBase {
    constructor() {
        super();
    }

    templates() {
        return [
            () => { return require('./home-banner.html') }
        ];
    }

    render() {

        var compiledTemplate = this.compileTemplate('home-banner1', { text: "Julian" });

        var promise = new Promise((resolve, reject) => {
            console.log("render function called.");
            resolve(this);
        });

        return promise;
    }
}

WidgetService.registerWidget(HomeBanner);
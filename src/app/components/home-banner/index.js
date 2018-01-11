import WidgetBase from '../../base/WidgetBase';

export class HomeBanner extends WidgetBase {
    constructor() {
        super();
    }

    templateUrl() {
        return [
            () => {
                return require('./home-banner.html')
            }
        ];
    }

    render() {

        var compiledTemplate = this.compileTemplate('home-banner', {});

        var promise = new Promise((resolve, reject) => {
            console.log("render function called.");
            resolve(this);
        });

        return promise;
    }
}

new HomeBanner();

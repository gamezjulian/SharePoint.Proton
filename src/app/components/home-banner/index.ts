import { ProtonWidget } from '../../proton/base';
import { ProtonWidgetService } from '../../proton/services';
import { BannerService } from './services/bannerService';

export class HomeBanner extends ProtonWidget {

    private items;

    public constructor() {
        super();

        this.items = [];
    }

    public templates(): Array<any> {
        return [
            () => { return require('./views/home-banner-template.html') }
        ];
    }

    public async render(): Promise<void> {
        return BannerService.getItems()
            .then(items => {
                this.items = items;
                this.compileTemplate('banner-container', this);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

ProtonWidgetService.registerWidget(HomeBanner);
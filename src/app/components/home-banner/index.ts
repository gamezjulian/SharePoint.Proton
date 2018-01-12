import { WidgetBase } from '../../base/WidgetBase';
import { WidgetService } from '../../services/WidgetService';
import { BannerService } from './services/bannerService';
import { iWidget } from '../../interfaces/iWidget';

export class HomeBanner extends WidgetBase {

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

WidgetService.registerWidget(HomeBanner);
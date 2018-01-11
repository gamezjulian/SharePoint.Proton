import * as pnp from 'sp-pnp-js';
import BannerMapper from '../mappers/bannerMapper';

class BannerService {

    getItems() {
        return pnp.sp.web.lists.getItems();
    }
}

let bannerService = new BannerService();

export { bannerService as BannerService }
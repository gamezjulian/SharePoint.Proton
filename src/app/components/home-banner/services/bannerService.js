import * as pnp from 'sp-pnp-js';
import BannerMapper from '../mappers/bannerMapper';
import BannerViewModelModel from '../models/bannerViewModel';

class BannerService {

    getItems() {

        const mapper = new BannerMapper(),
            bannerListTitle = 'Banner info',
            bannerList = pnp.sp.web.lists.getByTitle(bannerListTitle);


        return bannerList.items.get()
            .then((result) => {
                var mappedItems = result.map(x => {
                    return mapper.map(x)
                });

                return mappedItems;
            })
            .catch(err => {
                console.log(err);
            });
    };
}

let bannerService = new BannerService();

export { bannerService as BannerService }
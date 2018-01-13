import BannerViewModel from '../models/bannerViewModel';

export default class BannerMapper {
    constructor() {

    }

    map(entity) {
        return new BannerViewModel(entity.Title);
    }
}
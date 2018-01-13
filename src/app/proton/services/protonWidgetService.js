import ProtonConfigurationFactory from '../configuration/protonConfigurationFactory'

class ProtonWidgetService {
    constructor() {
    }

    registerWidget(widget) {
        ProtonConfigurationFactory.register(widget);
    }

    getWidgetInstance(name) {
        const Class = ProtonConfigurationFactory.find(name);
        const instance = new Class();

        return instance;
    }
}

let service = new ProtonWidgetService();

export { service as ProtonWidgetService }; 
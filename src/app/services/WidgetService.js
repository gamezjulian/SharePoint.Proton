import factory from '../configuration/configurationFactory'

class WidgetService {
    constructor() {
    }

    registerWidget(widget) {
        factory.register(widget);
    }

    getWidgetInstance(name) {
        const Class = factory.find(name);
        const instance = new Class();

        return instance;
    }
}

let service = new WidgetService();

export { service as WidgetService }; 
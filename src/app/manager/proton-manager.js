import { HomeBanner } from '../components';
import { WidgetService } from '../services/WidgetService';
import { WidgetBase } from '../base/WidgetBase';

class ProtonManager {
    constructor() {
        this.init();
    }

    // identifies widgets configured on the page.
    init() {
        let widgetContainers = $('[proton]').toArray();

        widgetContainers.forEach((container) => {
            let widgetName = $(container).attr('proton');
            var instance = this.createInstance(widgetName);

            if (instance) {
                instance.container = container;
            }

            this.callHooks(instance);

        });
    }

    // returns an instance of a class based on the provided name
    createInstance(name) {
        var instance = WidgetService.getWidgetInstance(name);

        return instance;
    }

    // runs hooks defined in the widget class
    callHooks(instance) {
        
        if (instance) {
            instance.preRender()
                .then(x => x.render())
                .then(x => x.postRender());
        }
    }
}

export { ProtonManager }
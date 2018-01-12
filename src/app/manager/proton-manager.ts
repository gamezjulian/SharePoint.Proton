import { WidgetService } from '../services/WidgetService';

class ProtonManager {
    constructor() {
    }

    // identifies widgets configured on the page.
    public init() {
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
    private createInstance(name) {
        var instance = WidgetService.getWidgetInstance(name);

        return instance;
    }

    // runs hooks defined in the widget class
    private callHooks(instance) {

        if (instance) {
            if (instance.preRender) {
                instance.preRender()
                    .then((x) => {
                        if (x.render) {
                            x.render()
                                .then((y) => {
                                    if (y.postRender) {
                                        y.postRender()
                                            .then(z => {
                                                console.log(`Widget ${z.constructor.name} loaded.`);
                                            })
                                    }
                                });
                        }
                    });
            }
        }
    }
}

export { ProtonManager }
import { HomeBanner } from '../components';
import { WidgetService } from '../services/WidgetService';
import { WidgetBase } from '../base/WidgetBase';

class ProtonManager {
    constructor() {
        this.init();
    }

    init() {

        let widgetContainers = $('[proton]');
        let widgetNames = widgetContainers.toArray().map(x => $(x).attr('proton'));

        widgetNames.forEach((item) => {
            var instance = this.createInstance(item);

            this.callHooks(instance);

        });
    }

    createInstance(name) {
        var widgetClass = WidgetService.getWidgetClass(name);
        var instance = null;

        if (widgetClass) {
            instance = eval(widgetClass);
        }

        return instance;
    }

    callHooks(instance) {

        if (instance) {
            if (instance.preRender) {
                instance.preRender()
                    .then((x) => {
                        if (x.render) {
                            x.render()
                                .then((y) => {
                                    if (y.render) {
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
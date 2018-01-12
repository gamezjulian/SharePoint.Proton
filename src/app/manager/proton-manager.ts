import { WidgetService } from '../services/WidgetService';
import { iWidget } from '../interfaces/iWidget';

class ProtonManager {
    public constructor() {
    }

    // identifies widgets configured on the page.
    public init(): void {
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
    private createInstance(name: string) {
        var instance = WidgetService.getWidgetInstance(name);

        return instance;
    }

    // runs hooks defined in the widget class
    private async callHooks(instance: iWidget) {

        if (instance) {
            await instance.preRender();
            await instance.render();
            await instance.postRender();
        }
    }
}

export { ProtonManager }
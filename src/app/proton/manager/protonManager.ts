import { ProtonWidgetService } from '../services';
import { iProtonWidget } from '../interfaces';

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
                instance.Container = container;
                instance.Name = widgetName;
            }

            this.callHooks(instance);

        });
    }

    // returns an instance of a class based on the provided name
    private createInstance(name: string) {
        var instance = ProtonWidgetService.getWidgetInstance(name);

        return instance;
    }

    // runs hooks defined in the widget class
    private async callHooks(instance: iProtonWidget) {

        if (instance) {
            await instance.preRender();
            await instance.whileRender();
            await instance.postRender();
        }
    }
}

export { ProtonManager }
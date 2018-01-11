class WidgetService {
    constructor() {
        this.widgets = [];
    }

    registerWidget(widget) {
        this.widgets.push(widget);
    }

    getWidgetClass(name) {
        return this.widgets.find(x => x.constructor.name == name);
    }
}

let service = new WidgetService();

export { service as WidgetService }; 
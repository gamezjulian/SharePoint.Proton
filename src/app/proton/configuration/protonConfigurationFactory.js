// factory used to register and retrieve classes when they need to be instantiated

const ProtonWidgetFactory = {
    mappings: {},
    register: obj => register(obj),
    find: key => ProtonWidgetFactory.mappings[key]
};

function register(obj) {
    ProtonWidgetFactory.mappings[obj.name] = obj;
}

export default ProtonWidgetFactory;
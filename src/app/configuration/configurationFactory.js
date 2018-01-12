// factory used to register and retrieve classes when they need to be instantiated

const factory = {
    mappings: {},
    register: obj => register(obj),
    find: key => factory.mappings[key]
};

function register(obj){
    factory.mappings[obj.name] = obj;
}

export default factory;
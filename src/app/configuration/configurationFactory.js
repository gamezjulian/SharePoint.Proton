const factory = {
    mappings: {},
    register: obj => factory.mappings[obj.name] = obj,
    find: key => factory.mappings[key]
};

export default factory;
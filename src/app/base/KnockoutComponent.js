import * as ko from 'knockout';

export default class KnockoutComponent {
    constructor() {

    }

    applyBindings(...parameters) {
        let [model, element] = parameters
        return ko.applyBindings(model, element);
    }
}
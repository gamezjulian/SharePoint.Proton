import { ProtonManager } from './proton/manager/protonManager';
import * as pnp from 'sp-pnp-js';

require('./components');

pnp.setup({
    headers: {
        "Accept": "application/json; odata=verbose",
        "Content-Type": "application/json; odata=verbose"
    }
});

$(function () {
    let manager = new ProtonManager();
    manager.init();
})

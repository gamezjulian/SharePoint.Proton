import { ProtonManager } from './manager/proton-manager'
import * as components from './components'
import * as pnp from 'sp-pnp-js'

pnp.setup({
    headers: {
        "Accept": "application/json; odata=verbose",
        "Content-Type": "application/json; odata=verbose"
    }
});

$(function () {
    let manager = new ProtonManager();
})
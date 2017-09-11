
import { Type } from '@angular/core';

let uilist = new Array()
let uimap = new Map<string, Type<any>>()

export function UIComponent(options: {
    selector: string,
    component: any
}) {
    // debugger
    uilist.push(options)
    uimap.set(options.selector, options.component)
    console.log("uicomponent: selector", options.selector);
    console.log("uicomponent: component", options.component);
    return function ({ constructor: Function }) {

    }
}
export { uimap, uilist }
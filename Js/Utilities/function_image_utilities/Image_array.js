import { call } from "../../../image_zoom.js";

let image_arr = [];
function addToArray(item) {
    image_arr.push(item);
    call();
}
function getArray() {
    return image_arr;
}
function Empty_Array() {
    return image_arr = [];
}

export { addToArray, getArray, Empty_Array };
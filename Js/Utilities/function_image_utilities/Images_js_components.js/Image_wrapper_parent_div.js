import { get_create_element_Array_Images_js } from "../Image_js_variables.js";

let create_element_array = get_create_element_Array_Images_js();

export function image_wrapper_parent_div() {
    create_element_array[7] = document.createElement("div");
    create_element_array[7].id = "image_wrapper_parent";
}
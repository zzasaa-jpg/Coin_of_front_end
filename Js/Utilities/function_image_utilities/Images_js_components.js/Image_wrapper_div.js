import { get_create_element_Array_Images_js } from "../Image_js_variables.js";

let create_element_array = get_create_element_Array_Images_js();

export function image_wrapper_div() {
    create_element_array[8] = document.createElement("div");
    create_element_array[8].style.width = "auto";
    create_element_array[8].style.height = "150px";
    create_element_array[8].id = "image_wrapper";
}
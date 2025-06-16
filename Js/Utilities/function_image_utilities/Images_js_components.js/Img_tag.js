import { get_create_element_Array_Images_js } from "../Image_js_variables.js";

let create_element_array = get_create_element_Array_Images_js();

export function img_tag(base64Img) {
    create_element_array[9] = document.createElement("img");
    create_element_array[9].src = base64Img;
    create_element_array[9].style.width = "125px";
    create_element_array[9].style.margin = "10px";
    create_element_array[9].style.height = "125px";
    create_element_array[9].style.objectFit = "contain";
}
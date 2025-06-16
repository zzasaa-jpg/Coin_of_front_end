import { get_create_element_Array_Images_js } from "./Image_js_variables.js";

let create_element_array = get_create_element_Array_Images_js();

export function Empty_image_message(result) {
    if (result.data.length == 0) {
        create_element_array[1] = document.createElement("h1");
        create_element_array[1].innerText = "No images!";
        create_element_array[1].id = "No_img_mes"
        create_element_array[0].remove();
        document.body.appendChild(create_element_array[1]);
    }
}
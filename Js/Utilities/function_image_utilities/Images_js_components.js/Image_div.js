import { get_create_element_Array_Images_js } from "../Image_js_variables.js";
import { addToArray } from "../Image_array.js";
import { get_Image_zoom_array } from "../Image_zoom_variables.js";


let create_element_array = get_create_element_Array_Images_js();
let _array_of_Img_zoom = get_Image_zoom_array();

export function Image_div(item) {
    create_element_array[0] = document.getElementById("gallery");
    create_element_array[2] = document.createElement("div");
    create_element_array[2].id = "image_div";
    create_element_array[2].addEventListener("click", function () {
        item.img_url.forEach((element) => {
            addToArray(element);
        })
        create_element_array[0].style.display = "none";
        _array_of_Img_zoom.forEach((element) => {
            document.getElementById(element).style.display = "flex";
        });
        create_element_array[3] = document.getElementById("body");
        create_element_array[3].style.display = "flex";
    })
}
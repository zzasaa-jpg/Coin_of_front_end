import { get_create_element_Array_Images_js } from "../Image_js_variables.js";

let create_element_array = get_create_element_Array_Images_js();

export function Div_info(item) {
    create_element_array[4] = document.createElement("div");
    create_element_array[4].id = "div_info";
    create_element_array[5] = document.createElement("h1");
    create_element_array[5].id = "coin_of";
    create_element_array[6] = document.createElement("span");
    create_element_array[6].id = "date";
    create_element_array[5].innerText = item.coin_of, create_element_array[6].innerText = item.date;
}
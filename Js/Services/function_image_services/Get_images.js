import { get_create_element_Array_Images_js } from "../../Utilities/function_image_utilities/Image_js_variables.js";
import { Empty_image_message } from "../../Utilities/function_image_utilities/Empty_Images_message.js";
import { Image_div } from "../../Utilities/function_image_utilities/Images_js_components.js/Image_div.js";
import { Div_info } from "../../Utilities/function_image_utilities/Images_js_components.js/Div_info.js";
import { image_wrapper_parent_div } from "../../Utilities/function_image_utilities/Images_js_components.js/Image_wrapper_parent_div.js";
import { image_wrapper_div } from "../../Utilities/function_image_utilities/Images_js_components.js/Image_wrapper_div.js";
import { img_tag } from "../../Utilities/function_image_utilities/Images_js_components.js/img_tag.js";
import { Loader, Remove_Loader } from "../../../loader.js";
import { notification } from "../../../Notification.js";

let create_element_array = get_create_element_Array_Images_js();

export function Get_images_from_DB() {
    Loader(create_element_array[0], create_element_array[3], 0);
    fetch("http://localhost:2000/api_gate_way/get_all_documents_", {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": parseInt(localStorage.getItem('key'))
        }
    })
        .then(async (res) => {
            if (!res.ok) {
                const errorData = await res.json();
                Remove_Loader(create_element_array[0], create_element_array[3], 0);
                notification("#F44336", "white", errorData.message)
                throw new Error(`${res.status} - ${errorData.message}`);
            }
            return res.json();
        })
        .then(result => {
            Remove_Loader(create_element_array[0], create_element_array[3], 0);
            Empty_image_message(result);
            if (result.message == "from cache") {
                data_render(result.data.data)
            } else {
                data_render(result.data);
            }

        })
        .catch((error) => {
            console.error("❌ Image getting error:", error);
        });

    function data_render(result) {
        result.forEach((item) => {
            Image_div(item);
            Div_info(item);
            image_wrapper_parent_div();
            item.img_url.forEach((base64Img) => {
                image_wrapper_div();
                img_tag(base64Img);
                create_element_array[8].appendChild(create_element_array[9]);
                create_element_array[7].appendChild(create_element_array[8]);
                create_element_array[4].append(create_element_array[5], create_element_array[6]);
                create_element_array[2].append(create_element_array[7], create_element_array[4]);
                create_element_array[0].appendChild(create_element_array[2]);
            });
        });
    }
}
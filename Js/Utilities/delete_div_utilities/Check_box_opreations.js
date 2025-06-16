import { Is_checked } from "./check_box_checked_Is_true_false.js";
import { add_To_image_wrapper_array, addToArray_, get_image_wrapper_array, getArray_ } from "./Arrays_.js";
import { get_local_ID_array_from_update } from "./Id_local_varaibles.js";
import { get_check_value, getW } from "./check_value_state.js";
import { _delete_images } from "./_delete_images.js";

let local_ID_varaibles = get_local_ID_array_from_update();
export function check_box_from_update(data) {
    data.forEach((ele, idx) => {
        add_To_image_wrapper_array(idx);
        local_ID_varaibles[9].innerHTML += `
        <div id="image_wrapper">
        <img src =${ele} alt="img" id="img_">
        <input type="checkbox" name="input_image_check_box" class="input_image_check_box" data-idx = ${idx}/>
        </div>`;
    });
    Is_checked("input_image_check_box", get_check_value, local_ID_varaibles[10], addToArray_, getArray_, "idx", true, getW)
    _delete_images(data, Array.from(document.getElementsByClassName("input_image_check_box")))
}
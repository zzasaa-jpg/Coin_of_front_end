import { removeInPlace } from "./remove_in_place.js"
import { filter_dataset_array } from "./Filter_Dataset_checkboxes_array.js";
import { disable_check_boxes } from "./Disable_the_check_boxes.js";
import { disable_false_all_check_boxes } from "./Disable_false_check_boxes.js"
import { get_check_value, set_check_value } from "./check_value_state.js";
import { get_local_ID_array_from_update } from "./Id_local_varaibles.js";
import { get_image_wrapper_array } from "./Arrays_.js";

let local_ID_varaibles = get_local_ID_array_from_update();

export function Is_checked(check_boxes, checked_value, disabled_element, array_push, array, data_set, Int, w) {
    let Dataset_of_checkboxes = [];
    Array.from(document.getElementsByClassName(check_boxes)).forEach((check_box) => {
        Dataset_of_checkboxes.push(check_box.dataset[data_set])
        check_box.addEventListener("click", function (e) {
            let checked_value_ = checked_value();
            if (check_box.checked == false) {
                checked_value_ = checked_value_ - 1;
                set_check_value(checked_value_);
                check_box_checked_Is_true_flase(checked_value_, disabled_element)
                if (w() == 1) {
                    disable_false_all_check_boxes(Array.from(document.getElementsByClassName(check_boxes)))
                }
                removeInPlace(array(), e.target.dataset[data_set], Int)
                local_ID_varaibles[17].disabled = false;
                local_ID_varaibles[11].disabled = false;
            } else {
                checked_value_ = checked_value_ + 1;
                set_check_value(checked_value_);
                check_box_checked_Is_true_flase(checked_value_, disabled_element)
                if (get_check_value() === get_image_wrapper_array().length) {
                    local_ID_varaibles[10].disabled = true;
                    local_ID_varaibles[17].disabled = true;
                    local_ID_varaibles[11].disabled = true;
                }
                array_push(e.target.dataset[data_set])
                if (w() == 1) {
                    let filtered_array = filter_dataset_array(Dataset_of_checkboxes, e.target.dataset[data_set])
                    disable_check_boxes(filtered_array, Array.from(document.getElementsByClassName(check_boxes)))
                }
            }
        })
    })
    function check_box_checked_Is_true_flase(checked_value_, disabled_element) {
        if (checked_value_ == 0) {
            disabled_element.disabled = true;
            local_ID_varaibles[16].disabled = true;
            if (w() == '') {
                local_ID_varaibles[10].disabled = true;
            }
        } else {
            disabled_element.disabled = false
            local_ID_varaibles[16].disabled = false;
            if (w() == '') {
                local_ID_varaibles[10].disabled = false;
            }
        }
    }
}
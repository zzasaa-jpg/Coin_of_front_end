import { update_Values } from "../../Services/delete_div_services/Update_Value.js";
import { get_new_file_upload_array } from "./Arrays_.js";
import { get_file_upload_event } from "./check_value_state.js";
import { getUpdateObject, pushToArray } from "./Global_Update_object.js";
import { get_local_ID_array_from_update } from "./Id_local_varaibles.js";

let local_ID_varaibles = get_local_ID_array_from_update();

export function update_button(id) {
    local_ID_varaibles[10].addEventListener("click", function () {
        if (get_file_upload_event()) {
            get_new_file_upload_array().forEach((ele) => {
                pushToArray(ele);
            })
        }
        update_Values(id, getUpdateObject)
    }, { once: true })
}
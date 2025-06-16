import { get_local_ID_array_from_update } from "./Id_local_varaibles.js";
import { Update_items } from "../../Services/delete_div_services/Update_images.js";
import { empty_check_value_equal_to_zero, emptyW, file_upload_event_false } from "./check_value_state.js";
import { update_value_of_coin_of } from "./Coin_of_input.js";
import { File_read2 } from "./File_read2.js";
import { Empty_Array_, Empty_Delete_Array_, Empty_image_wrapper_array } from "./Arrays_.js";
import { resetUpdateObject } from "./Global_Update_object.js";

let local_ID_varaibles = get_local_ID_array_from_update();

export function update_function(id) {
    emptyW(); empty_check_value_equal_to_zero();
    local_ID_varaibles[9].innerHTML = '';
    local_ID_varaibles[12].innerHTML = '';
    local_ID_varaibles[19].reset();
    local_ID_varaibles[18].innerHTML = '';
    Empty_Delete_Array_();
    resetUpdateObject();
    Empty_Array_();
    file_upload_event_false();
    local_ID_varaibles[10].disabled = true;
    Empty_image_wrapper_array();

    local_ID_varaibles[3].style.display = "none";
    local_ID_varaibles[16].style.display = "none";
    [local_ID_varaibles[9], local_ID_varaibles[11], local_ID_varaibles[17], local_ID_varaibles[12], local_ID_varaibles[10], local_ID_varaibles[21]].forEach((element) => {
        element.style.display = "flex";
    })
    Update_items(id);
    update_value_of_coin_of();
    File_read2();
}
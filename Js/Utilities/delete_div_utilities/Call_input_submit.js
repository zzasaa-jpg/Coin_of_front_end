import { del } from "../../Services/delete_div_services/Delete.js";
import { getDeleteArray_, Empty_Delete_Array_ } from "./Arrays_.js";
import { get_local_ID_array_from_update } from "./Id_local_varaibles.js";
import { get_Main_Array_, Empty_Main_Array_ } from "./Arrays_.js";
import { empty_check_value, get_check_value } from "./check_value_state.js";
import { fetch_Ids } from "../../Services/delete_div_services/Fetch_Id's.js";

let local_ID_varaibles = get_local_ID_array_from_update();

export function input_submit() {
    local_ID_varaibles[6].addEventListener("click", function () {
        del(getDeleteArray_());
        local_ID_varaibles[7].disabled = true;
        Empty_Main_Array_();
        local_ID_varaibles[15].innerHTML = "";
        empty_check_value()
        Empty_Delete_Array_()
        local_ID_varaibles[6].disabled = true;
        setTimeout(() => {
            fetch_Ids();
        }, 400)
    })
}
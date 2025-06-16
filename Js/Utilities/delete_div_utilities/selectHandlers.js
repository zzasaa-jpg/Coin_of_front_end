import { Empty_Delete_Array_, get_Main_Array_ } from "./Arrays_.js";
import { set_check_value, empty_check_value, get_check_value, setW, getW, emptyW, get_delete_selecet_refresh_value } from "./check_value_state.js";
import { disable_false_all_check_boxes, un_select_check_boxes, main_array_check_box_disable_true } from "./Disable_false_check_boxes.js";
import { get_local_ID_array_from_update } from "./Id_local_varaibles.js";

let local_Id_varaibles = get_local_ID_array_from_update();

export function handle_Select() {
    local_Id_varaibles[7].addEventListener("change", function (e) {
        local_Id_varaibles[13].style.display = "none";
        local_Id_varaibles[6].disabled = true;
        local_Id_varaibles[16].disabled = true;
        local_Id_varaibles[10].disabled = true;
        Empty_Delete_Array_()
        disable_false_all_check_boxes(Array.from(document.getElementsByClassName("check_box")))
        if (get_Main_Array_().length == 0) {
            main_array_check_box_disable_true(Array.from(document.getElementsByClassName("check_box")))
        } else {
            un_select_check_boxes(Array.from(document.getElementsByClassName("check_box")))
        }
        empty_check_value()
        set_check_value(0)
        if (e.target.value == "delete") {
            if (get_delete_selecet_refresh_value()) {
                location.reload()
            }
            [local_Id_varaibles[5], local_Id_varaibles[3], local_Id_varaibles[6]].forEach((element) => {
                local_Id_varaibles[5].style.display = "inline-block"
                element.style.display = "flex";
                local_Id_varaibles[16].style.display = "none";
            })
            emptyW()
            setW(0)
        } else if (e.target.value == "update") {
            [local_Id_varaibles[5], local_Id_varaibles[6]].forEach((element) => {
                element.style.display = "none";
                local_Id_varaibles[3].style.display = "flex";
                local_Id_varaibles[16].style.display = "flex";
            })
            setW(1)
        }
    })

}
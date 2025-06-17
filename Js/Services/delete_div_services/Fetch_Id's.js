import { add_To_Main_Array_, get_Main_Array_, addToDeleteArray_, getDeleteArray_, Empty_Main_Array_ } from "../../Utilities/delete_div_utilities/Arrays_.js";
import { get_check_value, getW } from "../../Utilities/delete_div_utilities/check_value_state.js";
import { Is_checked } from "../../Utilities/delete_div_utilities/check_box_checked_Is_true_false.js";
import { get_local_ID_array_from_update } from "../../Utilities/delete_div_utilities/Id_local_varaibles.js";
import { notification } from "../../../Notification.js";
import { Loader, Remove_Loader } from "../../../loader.js";

let local_ID_varaibles = get_local_ID_array_from_update();
let array = get_Main_Array_();

export function fetch_Ids() {
    Loader(local_ID_varaibles[3], local_ID_varaibles[14], 2);
    fetch("http://localhost:2000/api_gate_way/get_all_documents_", {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": parseInt(localStorage.getItem('key'))
        }
    })
        .then(async (res) => {
            if (!res.ok) {
                const errorData = await res.json();
                local_ID_varaibles[5].disabled = true;
                Remove_Loader(local_ID_varaibles[3], local_ID_varaibles[14], 2);
                notification("#F44336", "white", errorData.message);
                throw new Error(`${res.status} - ${errorData.message}`);
            }
            return res.json();
        })
        .then(data => {
            Empty_Main_Array_();
            local_ID_varaibles[15].innerHTML = "";
            Remove_Loader(local_ID_varaibles[3], local_ID_varaibles[14], 2);
            if (data.message == "from cache"){
                data_render(data.data.data);
            } else{
                data_render(data.data);
            }
            if (array.length == 0) {
                local_ID_varaibles[5].disabled = true;
                local_ID_varaibles[15].innerHTML += `
                <td>No Data</td>
                <td>No Data</td>
                <td><input type="checkbox" class="check_box" name="check_box" disabled ></td>`;
            }
            array.forEach((element) => {
                local_ID_varaibles[15].innerHTML += `
                <td>${element._id}</td>
                <td>${element.coin_of}</td>
                <td><input type="checkbox" class="check_box" name="check_box" data-id=${element._id}></td>`;
            });
            Is_checked("check_box", get_check_value, local_ID_varaibles[6], addToDeleteArray_, getDeleteArray_, "id", false, getW);
        })
        .catch(error => {
            console.error(error);
        })

        function data_render(data){
            data.forEach((element) => {
                add_To_Main_Array_(element)
            })
        }
}
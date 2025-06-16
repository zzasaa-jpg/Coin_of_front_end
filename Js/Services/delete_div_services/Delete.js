import { Loader, Remove_Loader } from "../../../loader.js";
import { get_local_ID_array_from_update } from "../../Utilities/delete_div_utilities/Id_local_varaibles.js"
import { notification } from "../../../Notification.js";

let local_Id_varaibles = get_local_ID_array_from_update();
export function del(ids) {
    local_Id_varaibles[5].disabled = true;
    Loader(local_Id_varaibles[6], local_Id_varaibles[14], 4);
    fetch("http://localhost:2000/api_gate_way/delete_document__", {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "x-api-key": parseInt(localStorage.getItem('key'))
        },
        body: JSON.stringify({ ids })
    })
        .then(async (res) => {
            if (!res.ok) {
                const errorData = await res.json();
                Remove_Loader(local_Id_varaibles[6], local_Id_varaibles[14], 4);
                notification("#F44336", "white", errorData.message);
                throw new Error(`${res.status} - ${errorData.message}`);
            }
            return res.json();
        })
        .then(data => {
            Remove_Loader(local_Id_varaibles[6], local_Id_varaibles[14], 4);
            setTimeout(() => {
                local_Id_varaibles[7].disabled = false;
                local_Id_varaibles[5].disabled = false;
            }, 4000)
            notification("#2196F3", "white", "Successful Deleted!");
        })
        .catch(error => {
            console.error(error);
        })
}
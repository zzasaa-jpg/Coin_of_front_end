import { update_function } from "../../Utilities/delete_div_utilities/Update_function.js";
import { notification } from "../../../Notification.js";
import { Loader, Remove_Loader } from "../../../loader.js";
import { get_local_ID_array_from_update } from "../../Utilities/delete_div_utilities/Id_local_varaibles.js";

let local_ID_varaibles = get_local_ID_array_from_update();

export async function update_Values(id, update_value) {
    Loader(local_ID_varaibles[10], local_ID_varaibles[14], 10);
    let update = update_value();
    try {
        const response = await fetch(`https://coin-of-gate-way.onrender.com/api_gate_way/update_document__/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": parseInt(localStorage.getItem('key'))
            },
            body: JSON.stringify({ coin_of: update.coin_of, img_url: update.img_url })
        })
        if (!response.ok) {
            const errorData = await response.json();
            Remove_Loader(local_ID_varaibles[10], local_ID_varaibles[14], 10);
            notification("#F44336", "white", errorData.message);
            throw new Error(`${response.status} - ${errorData.message}`);
        }
        if (response.ok) {
            Remove_Loader(local_ID_varaibles[10], local_ID_varaibles[14], 10);
            const data = await response.json();
            update_function(data.data._id);
        }
    } catch (error) {
        console.error("error in update value!", error);
    }
}
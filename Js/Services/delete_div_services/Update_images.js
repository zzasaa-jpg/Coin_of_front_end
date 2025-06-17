import { check_box_from_update } from "../../Utilities/delete_div_utilities/Check_box_opreations.js";
import { get_local_ID_array_from_update } from "../../Utilities/delete_div_utilities/Id_local_varaibles.js";
import { Loader, Remove_Loader } from "../../../loader.js";
import { _delete_images } from "../../Utilities/delete_div_utilities/_delete_images.js";
import { update_button } from "../../Utilities/delete_div_utilities/Update_button_send_value.js";
import { notification } from "../../../Notification.js";

let local_ID_varaibles = get_local_ID_array_from_update();

export async function Update_items(id) {
    Loader(local_ID_varaibles[9], local_ID_varaibles[14], 4);
    try {
        const response = await fetch(`http://localhost:2000/api_gate_way/image_array__/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": parseInt(localStorage.getItem('key'))
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            Remove_Loader(local_ID_varaibles[9], local_ID_varaibles[14], 4);
            notification("#F44336", "white", errorData.message);
            throw new Error(`${response.status} - ${errorData.message}`);
        }
        if (response.ok) {
            const data = await response.json();
            Remove_Loader(local_ID_varaibles[9], local_ID_varaibles[14], 4);
            coin_of.value = data.data.coin_of;
            check_box_from_update(data.data.img_url)
            update_button(id)
        }
    } catch (error) {
        console.error("error from image getting!", error)
    }
}
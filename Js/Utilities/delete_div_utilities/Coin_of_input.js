import { form_validation } from "../../Validation/Form_validation/form_Validation.js";
import { updateName } from "./Global_Update_object.js";
import { get_local_ID_array_from_update } from "./Id_local_varaibles.js";

let local_ID_varaibles = get_local_ID_array_from_update();

export function update_value_of_coin_of() {
    const input = local_ID_varaibles[11];

    // Clone to remove all previous listeners
    const newInput = input.cloneNode(true);
    input.parentNode.replaceChild(newInput, input);

    newInput.addEventListener("change", function (e) {
        local_ID_varaibles[10].disabled = false;
        form_validation();
        updateName(e.target.value.trim());
    })
    local_ID_varaibles[11] = newInput;
}
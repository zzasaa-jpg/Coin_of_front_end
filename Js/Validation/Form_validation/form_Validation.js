import { get_local_ID_array_from_update } from "../../Utilities/delete_div_utilities/Id_local_varaibles.js";

let local_ID_varaibles = get_local_ID_array_from_update();

export function form_validation() {
    let isValid = true;

    local_ID_varaibles[11].classList.remove('invalid');
    local_ID_varaibles[21].textContent = '';

    if (local_ID_varaibles[11].value.trim() === '') {
        local_ID_varaibles[21].textContent = 'Coin name is required';
        local_ID_varaibles[11].classList.add('invalid');
        local_ID_varaibles[10].disabled = true;
        local_ID_varaibles[11].style.borderColor = "red";
        local_ID_varaibles[17].disabled = true;
        Disable_inputs(Array.from(local_ID_varaibles[20]));
        isValid = false;
    } else if (local_ID_varaibles[11].value.length < 3) {
        local_ID_varaibles[21].textContent = 'Coin name must be at least 3 characters';
        local_ID_varaibles[11].classList.add('invalid');
        local_ID_varaibles[10].disabled = true;
        local_ID_varaibles[11].style.borderColor = "red";
        local_ID_varaibles[17].disabled = true;
        Disable_inputs(Array.from(local_ID_varaibles[20]));
        isValid = false;
    }

    if (isValid) {
        local_ID_varaibles[11].style.borderColor = "white";
        local_ID_varaibles[10].disabled = false;
        local_ID_varaibles[17].disabled = false;
        Array.from(local_ID_varaibles[20]).forEach((input) => {
            input.disabled = false;
        })
    }

    function Disable_inputs(array) {
        array.forEach((input) => {
            input.disabled = true;
        })
    }
}
/* The isValid is false than also diableing the 'input_image_check_box', 'upload_image'*/
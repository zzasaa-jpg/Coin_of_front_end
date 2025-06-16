import { get_Id_Array_Script } from "../function_image_utilities/script.js_variables.js";

let Id_array_script = get_Id_Array_Script();

let handle_values_ref;
export function set_local_storage_values() {
    if (!handle_values_ref) {
        handle_values_ref = function handle_values() {
            if (!Id_array_script[7].value || !Id_array_script[8].value) {
                return alert("Correct values enter!")
            }
            localStorage.setItem(Id_array_script[7].value.trim(), Id_array_script[8].value.trim());
            Id_array_script[7].value = '';
            Id_array_script[8].value = '';
            [Id_array_script[5],
            Id_array_script[6],
            Id_array_script[9]].forEach((element) => {
                element.style.display = "none";
            })
            document.getElementsByTagName('body')[0].style.margin = "revert";
            Id_array_script[9].removeEventListener("click", handle_values_ref);
            handle_values_ref = null;
        }
    }
    Id_array_script[9].addEventListener("click", handle_values_ref)

}

/*
  First checcking the values is correct or incorrect,
  second is set localstorage value with trim value,
  third is clearing the inputs,
  fourth is styles none for 'local_storage_section',
  fifth is removeEventListener.
*/
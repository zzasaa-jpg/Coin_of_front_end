import { add_To_file_size_array, add_To_new_file_upload_array, Empty_file_size_array, Empty_new_file_upload_array, get_file_size_array, get_new_file_upload_array } from "./Arrays_.js";
import { cal2 } from "./cal2.js";
import { file_upload_event_true } from "./check_value_state.js";
import { getUpdateObject } from "./Global_Update_object.js";
import { get_local_ID_array_from_update } from "./Id_local_varaibles.js";
let local_ID_varaibles = get_local_ID_array_from_update();
export function File_read2() {
    const oldInput = local_ID_varaibles[17];
    const newInput = oldInput.cloneNode(true); // copy the node
    oldInput.replaceWith(newInput); // replace in DOM
    local_ID_varaibles[17] = newInput; // update the reference

    newInput.addEventListener("change", function (e) {
        local_ID_varaibles[10].disabled = false;
        file_upload_event_true();
        Empty_new_file_upload_array();
        Empty_file_size_array();
        local_ID_varaibles[12].innerHTML = "";
        local_ID_varaibles[18].innerText = "0 mb";

        const files = e.target.files;
        let loadedFiles = 0;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            add_To_file_size_array(file.size)

            const reader = new FileReader();
            reader.onload = function (event) {
                const fileContent = event.target.result;
                add_To_new_file_upload_array(fileContent);

                local_ID_varaibles[12].innerHTML += `
                <div id="image_wrapper">
                <img src =${fileContent} alt="img" id="img_">
                </div>`;

                loadedFiles++;
                if (loadedFiles === files.length) {
                    // cal(get_file_size_array);
                    cal2(get_file_size_array)
                }
            };
            reader.readAsDataURL(file);
        }
    });
}
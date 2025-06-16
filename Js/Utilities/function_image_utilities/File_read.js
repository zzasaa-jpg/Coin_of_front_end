import { get_Common_Variables_Of_Script } from "./Common_varaibles_script.js";
import { cal } from "./Image_size_check.js";
import { get_Id_Array_Script } from "./script.js_variables.js";

let Id_array_script = get_Id_Array_Script();
let common_variables = get_Common_Variables_Of_Script();

export function File_read() {
    Id_array_script[2].addEventListener("change", function (e) {
        const files = e.target.files;
        common_variables[1] = []; // reset previous files
        common_variables[0] = [];
        Id_array_script[3].innerHTML = "";
        Id_array_script[1].innerText = "0 mb";

        let loadedFiles = 0;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            common_variables[0].push(file.size);

            const reader = new FileReader();
            reader.onload = function (event) {
                const fileContent = event.target.result;
                common_variables[1].push(fileContent);

                Id_array_script[3].innerHTML += `
                <div id="image_wrapper_">
                    <img src=${fileContent} id="img"/>
                </div>`;

                loadedFiles++;
                if (loadedFiles === files.length) {
                    cal(common_variables[0]);
                }
            };
            reader.readAsDataURL(file);
        }
    });
}
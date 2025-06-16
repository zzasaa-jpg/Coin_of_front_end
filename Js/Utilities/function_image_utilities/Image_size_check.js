import { get_Common_Variables_Of_Script } from "./Common_varaibles_script.js";
import { get_Id_Array_Script } from "./script.js_variables.js";

let common_variables = get_Common_Variables_Of_Script();
let size_span = get_Id_Array_Script();


export function cal(number) {
    let previous = 0;
    number.forEach((element, id) => {
        let kb = element / 1024;
        let mb = kb / 1024;
        previous = mb + previous;
    })
    size_span[1].innerText = `${previous}mb`;
    if (previous > 10) {
        alert("Size overWrite!!!");
        form.reset();
        image_container.innerHTML = "";
        common_variables[1] = [];
        common_variables[0] = [];
        size_span[1].innerText = "0 mb";
    }
}
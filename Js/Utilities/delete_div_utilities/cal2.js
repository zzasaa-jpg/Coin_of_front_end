import { Empty_file_size_array, Empty_new_file_upload_array } from "./Arrays_.js";
import { get_local_ID_array_from_update } from "./Id_local_varaibles.js";
let local_ID_varaibles = get_local_ID_array_from_update()

export function cal2(number) {
    let previous = 0;
    number().forEach((element, id) => {
        let kb = element / 1024;
        let mb = kb / 1024;
        previous = mb + previous;
    })
    local_ID_varaibles[18].style.display = "flex";
    local_ID_varaibles[18].innerText = `${previous}mb`;
    if (previous > 10) {
        alert("Size overWrite!!!");
        local_ID_varaibles[19].reset();
        local_ID_varaibles[12].innerHTML = "";
        Empty_file_size_array();
        Empty_new_file_upload_array();
        local_ID_varaibles[18].innerText = "0 mb";
    }
}
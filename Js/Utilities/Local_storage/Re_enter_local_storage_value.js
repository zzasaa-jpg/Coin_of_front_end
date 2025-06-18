import { get_Id_Array_Script } from "../function_image_utilities/script.js_variables.js";
import { set_local_storage_values } from "./Set_values_of_local_storage.js";

let Id_array_script = get_Id_Array_Script();

export function remove_local_storage_values() {
    let startX = 0;
    let endX = 0;

    window.addEventListener("touchstart", (e) => {
        startX = e.changedTouches[0].screenX;
    });
    window.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const diff = startX - endX;
        if (diff > 50) {
            localStorage.clear();
            Id_array_script[5].style.display = "flex";
            Id_array_script[6].style.display = "flex";
            Id_array_script[9].style.display = "block";
            set_local_storage_values();
            document.getElementsByTagName('body')[0].style.margin = "0px";
        }
    }
}
import { get_Id_Array_Script } from "../function_image_utilities/script.js_variables.js";
import { set_local_storage_values } from "./Set_values_of_local_storage.js";

let Id_array_script = get_Id_Array_Script();

export function Render_the_local_storage_section() {
    const mediaQuery = window.matchMedia('(max-width: 968px)');

    mediaQuery.addEventListener('change', Render_the_local_storage_section);
    mediaQuery.addEventListener('load', Render_the_local_storage_section);

    const isMobile = mediaQuery.matches;

    if (localStorage.getItem("key")) {
        return;
    }

    if (isMobile) {
        Id_array_script[5].style.display = "flex";
        Id_array_script[6].style.display = "flex";
        Id_array_script[9].style.display = "block";
        set_local_storage_values()
        document.getElementsByTagName('body')[0].style.margin = "0px";
    } else {
        [Id_array_script[5],
        Id_array_script[6],
        Id_array_script[9]].forEach((element) => {
            element.style.display = "none";
        })
        document.getElementsByTagName('body')[0].style.margin = "revert";
    }
}
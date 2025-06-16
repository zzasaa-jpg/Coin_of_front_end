import { Post_images } from "./Js/Services/function_image_services/Post_images.js";
import { get_Common_Variables_Of_Script } from "./Js/Utilities/function_image_utilities/Common_varaibles_script.js";
import { File_read } from "./Js/Utilities/function_image_utilities/File_read.js";
import { Render_the_local_storage_section } from "./Js/Utilities/Local_storage/Local_Storage.js";
import { remove_local_storage_values } from "./Js/Utilities/Local_storage/Re_enter_local_storage_value.js";

let common_variables = get_Common_Variables_Of_Script();

common_variables[0] = [];
common_variables[1] = [];

const mediaQuery = window.matchMedia('(max-width: 968px)');
window.addEventListener('load', Render_the_local_storage_section);
mediaQuery.addEventListener('change', Render_the_local_storage_section);

File_read();
Post_images();
remove_local_storage_values();
import { Get_images_from_DB } from "./Js/Services/function_image_services/Get_images.js";
import { change_window_location } from "./Js/Utilities/Change_window_location.js";
import { start_value } from "./Js/Utilities/start_value.js";
Get_images_from_DB();
change_window_location("./delete_div_.html");//window location change.
start_value();//for increase the value in backend.
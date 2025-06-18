import { get_local_ID_array_from_update } from "./Js/Utilities/delete_div_utilities/Id_local_varaibles.js";
import { handle_Select } from "./Js/Utilities/delete_div_utilities/selectHandlers.js";
import { input_submit } from './Js/Utilities/delete_div_utilities/Call_input_submit.js';
import { delete_all_documents } from "./Js/Utilities/delete_div_utilities/Call_delete_all_documents.js";
import { handleMediaChange } from "./Js/Utilities/delete_div_utilities/Media_query_for_close_btn.js";
import { update_function } from "./Js/Utilities/delete_div_utilities/Update_function.js";
import { getDeleteArray_ } from "./Js/Utilities/delete_div_utilities/Arrays_.js";
import { delete_selecet_refresh_true, get_check_value } from "./Js/Utilities/delete_div_utilities/check_value_state.js";
import { change_window_location } from "./Js/Utilities/Change_window_location.js";
import { start_value } from "./Js/Utilities/start_value.js";

let local_Id_varaibles = get_local_ID_array_from_update();

const mediaQuery = window.matchMedia('(max-width: 768px)');
mediaQuery.addEventListener('load', handleMediaChange);
mediaQuery.addEventListener('resize', handleMediaChange);
mediaQuery.addEventListener('change', handleMediaChange);

handle_Select()//handle select value
input_submit();//deleteing the image
delete_all_documents()//dalete all documents on server

//-------------get images from DB---------------------
local_Id_varaibles[16].addEventListener("click", function () {
    delete_selecet_refresh_true()
    update_function(getDeleteArray_()[0])
});
//----------------------------------------------------

change_window_location("./image.html")//window location change
start_value();//for increase the value in backend.
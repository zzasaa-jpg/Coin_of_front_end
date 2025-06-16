let update_array = [];
function addToArray_(item) {
    update_array.push(item);
}
function getArray_() {
    return update_array;
}
function Empty_Array_() {
    return update_array.length = 0;
}


export { addToArray_, getArray_, Empty_Array_ };

//------------------------------------------------------
let delete_array = [];
function addToDeleteArray_(item) {
    delete_array.push(item);
}
function getDeleteArray_() {
    return delete_array;
}
function Empty_Delete_Array_() {
    return delete_array.length = 0;
}

export { addToDeleteArray_, getDeleteArray_, Empty_Delete_Array_ }
//--------------------------------------------------------

let array = [];
function add_To_Main_Array_(item) {
    array.push(item);
}
function get_Main_Array_() {
    return array;
}
function Empty_Main_Array_() {
    return array.length = 0;
}
export { add_To_Main_Array_, get_Main_Array_, Empty_Main_Array_ }
//--------------------------------------------------------

let image_wrapper_array = [];
function add_To_image_wrapper_array(item) {
    image_wrapper_array.push(item);
}
function get_image_wrapper_array() {
    return image_wrapper_array;
}
function Empty_image_wrapper_array() {
    return image_wrapper_array.length = 0;
}
export { add_To_image_wrapper_array, get_image_wrapper_array, Empty_image_wrapper_array }
//--------------------------------------------------------

let new_file_upload_array = [];
function add_To_new_file_upload_array(item) {
    new_file_upload_array.push(item);
}
function get_new_file_upload_array() {
    return new_file_upload_array;
}
function Empty_new_file_upload_array() {
    return new_file_upload_array = [];
}
export { add_To_new_file_upload_array, get_new_file_upload_array, Empty_new_file_upload_array }

//----------------------------------------------------------

let file_size_array = [];
function add_To_file_size_array(item) {
    file_size_array.push(item);
}
function get_file_size_array() {
    return file_size_array;
}
function Empty_file_size_array() {
    return file_size_array.length = 0;
}
export { add_To_file_size_array, get_file_size_array, Empty_file_size_array }
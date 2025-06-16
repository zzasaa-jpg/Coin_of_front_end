let variables_array = [
    "close_delete_section",//1
    "delete_section",//2
    "select_div",//3
    "table_container",//4
    "mobile_close_btn_div",//5
    "Delete_all_btn",//6
    "input_submit",//7
    "select_tag",//8
    "image_wrapper",//9
    "images_div",//10
    "update_btn",//11
    "coin_of",//12
    "upload_image_container_from_update",//13
    "setting_img_div",//14
    "delete_container",//15
    "table",//16
    "get_images_btn",//17
    "upload_image",//18
    "file_size_span",//19
    "form2",//20
    "input_image_check_box",//21
    "coin_of_Error",//22
    "update_container"//23
];
let local_ID_array_from_update = [];
variables_array.forEach(element => {
    if (element == "input_image_check_box") {
        local_ID_array_from_update.push(document.getElementsByClassName(element));
    } else {
        local_ID_array_from_update.push(document.getElementById(element));
    }
});

export function get_local_ID_array_from_update() {
    return local_ID_array_from_update;
}

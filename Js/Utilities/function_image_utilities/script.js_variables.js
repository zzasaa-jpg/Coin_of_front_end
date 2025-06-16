let variables_array = [
    "submit",//0
    "size",//1
    "files",//2
    "image_container",//3
    "form",//4
    "local_storage_section",//5
    "local_storage_div",//6
    "local_storage_key",//7
    "local_storage_value",//8
    "set_btn",//9
    "error_for_key",//10
    "error_for_value"//11
];
let Id_array_of_script = [];
variables_array.forEach(element => {
    if (element == "error_for_key" || element == "error_for_value") {
        Id_array_of_script.push(document.getElementsByClassName(element));
    } else {
        Id_array_of_script.push(document.getElementById(element));
    }
});

export function get_Id_Array_Script() {
    return Id_array_of_script;
}

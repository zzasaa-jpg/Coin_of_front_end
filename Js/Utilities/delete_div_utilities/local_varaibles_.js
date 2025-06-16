let variables_array = [
    "arr",//1
    "check_value",//2
    "check_boxes_",//3
    "coin_of_value",//4
    "new_value_of_coin_of",//5
    "input_image_check_box"//6
];
let local_varaibles_array_from_update = [];
variables_array.forEach(element => {
    local_varaibles_array_from_update.push(element);
});

export function get_local_varaibles_array_from_update() {
    return local_varaibles_array_from_update;
}

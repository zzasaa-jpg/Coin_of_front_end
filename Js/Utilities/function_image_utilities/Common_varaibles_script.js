let variables_array = [
    "size_of_file_arr",
    "arr"
];
let common_variables_of_script = [];
variables_array.forEach(element => {
    common_variables_of_script.push(element);
});

export function get_Common_Variables_Of_Script() {
    return common_variables_of_script;
}
export function disable_false_all_check_boxes(check_boxes) {
    check_boxes.forEach(element => {
        element.disabled = false;
    });
}

export function un_select_check_boxes(check_boxes) {
    check_boxes.forEach(element => {
        element.checked = false;
    })
}
export function main_array_check_box_disable_true(check_boxes) {
    check_boxes.forEach(element => {
        element.disabled = true;
    })
}
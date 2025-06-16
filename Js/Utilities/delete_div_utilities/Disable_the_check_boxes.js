export function disable_check_boxes(filtered_array, check_boxes) {
    check_boxes.forEach(element => {
        if (element.dataset.id != filtered_array[0]) {
            element.disabled = true
        }
    });
}
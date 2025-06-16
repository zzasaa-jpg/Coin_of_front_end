export let w = 0;

export function setW(val) {
    w = val;
}

export function getW() {
    return w;
}

export function emptyW() {
    return w = '';
}

export let checked_value = 0;

export function set_check_value(val) {
    checked_value = val;
}

export function get_check_value() {
    return checked_value;
}

export function empty_check_value() {
    return checked_value = '';
}
export function empty_check_value_equal_to_zero() {
    return checked_value = 0
}
//-----------------------------------------------
export let file_upload_event = false;

export function file_upload_event_true() {
    return file_upload_event = true;
}

export function file_upload_event_false() {
    return file_upload_event = false;
}

export function get_file_upload_event() {
    return file_upload_event;
}

//---------------------------------------------
let delete_selecet_refresh = false;

export function delete_selecet_refresh_true() {
    return delete_selecet_refresh = true;
}

export function get_delete_selecet_refresh_value() {
    return delete_selecet_refresh;
}
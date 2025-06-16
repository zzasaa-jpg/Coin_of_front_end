export function handleMediaChange(e) {
    if (e.matches) {
        close_delete_section.style.position = "static";
        mobile_close_btn_div.appendChild(close_delete_section)
    } else {
        close_delete_section.style.position = "absolute";
        delete_section.appendChild(close_delete_section)
    }
}

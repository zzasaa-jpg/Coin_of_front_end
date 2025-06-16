let variables_array = ["Size_select",
    "image_receiver",
    "lens",
    "size_div",
    "img",
    "image_container_parent",
    "Image_Zoom",
    "chevron-forward-btn",
    "chevron-back-btn",
    "Close_Image_Zoom",
    "gallery",
    "body"
];
let Id_array = [];
variables_array.forEach(element => {
    Id_array.push(document.getElementById(element));
});

export function get_Id_Array() {
    return Id_array;
}

let Image_zoom_array = ["image_container_parent", "Image_Zoom", "Close_Image_Zoom"];
export function get_Image_zoom_array() {
    return Image_zoom_array;
}
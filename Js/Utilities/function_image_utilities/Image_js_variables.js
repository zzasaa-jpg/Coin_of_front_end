let variables_array = [
    "gallery",
    "h1",
    "div",
    "body",
    "div",
    "h1",
    "span",
    "div",
    "div",
    "img",
];
let create_element_array_of_Image_js = [];
variables_array.forEach(element => {
    if (element == "body" || element == "gallery") {
        create_element_array_of_Image_js.push(document.getElementById(element));
    } else {
        create_element_array_of_Image_js.push(document.createElement(element));
    }
});

export function get_create_element_Array_Images_js() {
    return create_element_array_of_Image_js;
}

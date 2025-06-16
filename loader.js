let Image_loader = document.createElement("img");

function Loader(hide_element, insert_element, index) {
    Image_loader.style.width = "30px";
    Image_loader.src = "./assets/images/loader.gif";
    hide_element.style.display = "none";
    insert_element.insertBefore(Image_loader, insert_element.children[index]);
}

function Remove_Loader(hide_element, insert_element, index) {
    Image_loader.remove()
    hide_element.style.display = "flex";
    insert_element.insertBefore(hide_element, insert_element.children[index]);
}

export { Loader, Remove_Loader }
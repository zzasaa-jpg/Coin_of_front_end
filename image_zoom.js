import { getArray, Empty_Array } from "./Js/Utilities/function_image_utilities/Image_array.js";
import { get_Id_Array, get_Image_zoom_array } from "./Js/Utilities/function_image_utilities/Image_zoom_variables.js";

let Id_array = get_Id_Array();
let option = Id_array[0].options;
let Image_Zoom_ = false;
// ---------------ImageZoom btn toggle-------------------------------------
Id_array[6].addEventListener("click", toggle_Image_Zoom);
function toggle_Image_Zoom() {
    Image_Zoom_ = !Image_Zoom_;
    if (Image_Zoom_) {
        Id_array[4].style.width = "500px";
        Id_array[4].style.height = "500px";
        [Id_array[1], Id_array[2], Id_array[3]].forEach((element) => {
            element.style.display = "flex";
        })
    } else {
        Id_array[4].style.width = "auto";
        Id_array[4].style.height = "auto";
        Id_array[4].style.maxWidth = "100%";
        Id_array[4].style.maxHeight = "100%";
        [Id_array[1], Id_array[2], Id_array[3]].forEach((element) => {
            element.style.display = "none";
        })
    }
}
//----------------------disable options for media query--------------------
function disable_option_on_media_query() {
    const mq = matchMedia("(max-width: 868px)");
    if (mq.matches) {
        option[0].disabled = true;
        option[2].disabled = true;
    } else {
        for (let i = 0; i < option.length; i++) {
            option[i].disabled = false;
        }
    }
}
window.addEventListener("load", disable_option_on_media_query);
window.addEventListener("resize", disable_option_on_media_query);
window.addEventListener("change", disable_option_on_media_query)
//-------------------------------------------------------------------------

//-------------------------select tag options onchange---------------------
Id_array[0].addEventListener("change", handle_Size_select);
function handle_Size_select(event) {
    let sizes = event.target.options[event.target.selectedIndex];
    let value = sizes.value;
    if (value == "300x500") {
        Id_array[1].style.height = "300px";
        Id_array[1].style.width = "500px";
    } else if (value == "600x200") {
        Id_array[1].style.height = "600px";
        Id_array[1].style.width = "200px";
    } else if (value == "200x600") {
        Id_array[1].style.height = "200px";
        Id_array[1].style.width = "600px";
    } else {
        Id_array[1].style.height = "500px";
        Id_array[1].style.width = "300px";
    }
}
//-------------------------------------------------------------------------
export function call() {
    let id = getArray()
    fetch_images_id(id)
}
async function fetch_images_id(array) {
    let image_arr = array;
    Id_array[4].src = image_arr[0];
    let current_image = 0;
    function change_img(current_image) {
        Id_array[4].src = image_arr[current_image];
    }
    Id_array[8].addEventListener("click", handle_back_image);
    function handle_back_image() {
        if (current_image == 0) {
            current_image = image_arr.length - 1;
            change_img(current_image);
        } else {
            current_image--;
            change_img(current_image);
        }
    }

    Id_array[7].addEventListener("click", handle_forward_image);
    function handle_forward_image() {
        if (current_image == image_arr.length - 1) {
            current_image = 0;
            change_img(current_image);

        } else {
            current_image++;
            change_img(current_image);
        }
    }
}

function mouse() {
    Id_array[4].addEventListener("mousemove", function (e) {
        Id_array[2].style.left = e.clientX + 'px';
        Id_array[2].style.top = e.clientY + 'px';
        const rect = Id_array[4].getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        Id_array[1].style.backgroundImage = `url(${Id_array[4].src})`;
        Id_array[1].style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    });

    Id_array[4].addEventListener("mouseleave", function () {
        Id_array[1].style.backgroundImage = "";
    });

}

mouse();

Id_array[9].addEventListener("click", function () {
    let a = get_Image_zoom_array()
    a.forEach((element) => {
        document.getElementById(element).style.display = "none";
    });
    Id_array[10].style.display = "flex";
    Id_array[11].style.display = "block";
    Empty_Array()
})
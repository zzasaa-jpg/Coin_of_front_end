import { getArray_ } from "./Arrays_.js";
import { updateArray } from "./Global_Update_object.js";
let lengthOf_array = getArray_();

export function _delete_images(data, input_image_check_box) {
    updateArray(data);
    if (data.length == 1) {
        input_image_check_box.forEach((input) => {
            input.disabled = true;
        })
    }//for only one image in DB
    input_image_check_box.forEach((input) => {
        input.addEventListener("click", function () {
            for (let i = 0; i < lengthOf_array.length; i++) {
                lengthOf_array[i] = parseInt(lengthOf_array[i]);
            }
            const allImagesFromDB = data;
            const keptIndexes = lengthOf_array;
            const updatedImageList = keptIndexes.map(index => allImagesFromDB[index]);
            if (updatedImageList.length == 0) {
                updateArray(data)
                return;
            }
            updateArray(updatedImageList);
        })
    })
}
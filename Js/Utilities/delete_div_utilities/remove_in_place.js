export function removeInPlace(array, valueToRemove, Int) {
    if (Int) {
        for (let i = 0; i < array.length; i++) {
            array[i] = parseInt(array[i]);
        }
        splice_array(array, parseInt(valueToRemove))
    } else {
        splice_array(array, valueToRemove)
    }
    function splice_array(array, valueToRemove) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] === valueToRemove) {
                array.splice(i, 1);
            }
        }
    }
}
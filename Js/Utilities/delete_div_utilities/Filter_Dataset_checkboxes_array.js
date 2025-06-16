export function filter_dataset_array(array, id) {
    let filter_array = array.filter((element) => element == id)
    return filter_array;
}
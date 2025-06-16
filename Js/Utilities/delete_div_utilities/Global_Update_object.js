export let Update_Object = {
    coin_of: undefined,
    img_url: [],
};

export function updateName(newName) {
    Update_Object.coin_of = newName;
}

export function updateArray(newArray) {
    Update_Object.img_url = Array.isArray(newArray) ? [...newArray] : [];
}

export function pushToArray(item) {
    if (!Array.isArray(Update_Object.img_url)) {
        Update_Object.img_url = [];
    }
    Update_Object.img_url.push(item);
}

export function getUpdateObject() {
    return {
        coin_of: Update_Object.coin_of,
        img_url: Array.isArray(Update_Object.img_url) ? [...Update_Object.img_url] : []
    };
}

export function getKey(key) {
    return Update_Object[key];
}

export function resetUpdateObject() {
    Update_Object.coin_of = undefined;
    Update_Object.img_url = [];
}

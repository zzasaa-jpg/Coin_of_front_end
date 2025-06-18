import { notification } from "../../Notification.js";

export async function start_api_gate_way() {
    Loader_info("Loading api gate way...");
    try {
        const response = await fetch("https://coin-of-gate-way.onrender.com/1_gate_way_api___", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": parseInt(localStorage.getItem('key'))
            }
        })
        if (!response.ok) {
            const data = await response.json();
            Loader_info_remove();
            notification("#F44336", "white", data.message);
        }
        if (response.ok) {
            const data = await response.json();
            Loader_info_remove();
            notification("#2196F3", "white", data.message);
        }
    } catch (error) {
        console.error(error);
    }
}

export async function start_backend() {
    try {
        const response = await fetch("https://coin-of-gate-way.onrender.com/start_engine", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": parseInt(localStorage.getItem('key'))
            }
        })
        if (!response.ok) {
            const data = await response.json();
            notification("#F44336", "white", data.message);
        }
        if (response.ok) {
            const data = await response.json();
            call___(data.___);
        }
    } catch (error) {
        console.error(error);
    }
}
async function call___(data) {
    console.log(data);
    Loader_info("Loading backend server...");
    try {
        const response = await fetch(data, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": parseInt(localStorage.getItem('key'))
            }
        })
        if (!response.ok) {
            const data = await response.json();
            Loader_info_remove();
            notification("#F44336", "white", data.message);
        }
        if (response.ok) {
            const data = await response.json();
            Loader_info_remove();
            notification("#2196F3", "white", data.message);
        }
    } catch (error) {
        console.error(error);
    }
}
let loader_h4;
function Loader_info(text){
    loader_h4 = document.createElement("h4");
    loader_h4.innerText = text;
    document.body.appendChild(loader_h4);
}

function Loader_info_remove(){
    loader_h4.remove();
}
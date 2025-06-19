import { notification } from "../../Notification.js";
import { start_api_gate_way, start_backend } from "./start_backend.js";
export async function start_value() {
    Loader_info("Backend booting up...");
    try {
        if (!localStorage.getItem("key")) {
            return;
        }
        const response = await fetch("https://coin-of-gate-way.onrender.com/val_86556", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": parseInt(localStorage.getItem("key"))
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
            if (data.value == 1) {
                start_api_gate_way();
                setTimeout(() => {
                    start_backend();
                }, 4000);
            }
        }
    } catch (error) {
        console.error(error);
    }
}
let loader_h4;
function Loader_info(text) {
    loader_h4 = document.createElement("h4");
    loader_h4.innerText = text;
    document.body.appendChild(loader_h4);
}

function Loader_info_remove() {
    loader_h4.remove();
}
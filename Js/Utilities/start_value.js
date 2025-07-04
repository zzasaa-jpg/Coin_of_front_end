import { notification } from "../../Notification.js";
import { start_api_gate_way, start_backend } from "./start_backend.js";
export async function start_value() {
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
            notification("#F44336", "white", data.message);
        }
        if (response.ok) {
            const data = await response.json();
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
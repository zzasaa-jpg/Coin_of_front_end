import { start_api_gate_way, start_backend } from "./start_backend.js";

export async function start_value() {
    try {
        const response = await fetch("http://localhost:2000/val_86556", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": parseInt(localStorage.getItem("key"))
            }
        })
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
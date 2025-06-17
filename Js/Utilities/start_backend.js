import { notification } from "../../Notification.js";

export async function start_api_gate_way() {
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
            notification("#F44336", "white", data.message)
        }
        if (response.ok) {
            const data = await response.json();
            notification("#2196F3", "white", data.message)
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
            notification("#F44336", "white", data.message)
        }
        if (response.ok) {
            const data = await response.json();
            notification("#2196F3", "white", data.message)
        }
    } catch (error) {
        console.error(error);
    }
}
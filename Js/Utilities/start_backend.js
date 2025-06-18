import { notification } from "../../Notification.js";

export async function start_services_parallel() {
    Loader_info("Starting services...");

    try {
        const key = parseInt(localStorage.getItem("key"));
        const headers = {
            "Content-Type": "application/json",
            "x-api-key": key
        };

        const [gatewayRes, backendRes] = await Promise.all([
            fetch("https://coin-of-gate-way.onrender.com/1_gate_way_api___", { method: "GET", headers }),
            fetch("https://coin-of-gate-way.onrender.com/start_engine", { method: "GET", headers })
        ]);

        const gatewayData = await gatewayRes.json();
        const backendData = await backendRes.json();

        Loader_info_remove();

        // Handle API Gateway result
        if (!gatewayRes.ok) {
            notification("#F44336", "white", gatewayData.message);
        } else {
            notification("#2196F3", "white", `Gateway: ${gatewayData.message}`);
        }

        // Handle Backend result
        if (!backendRes.ok) {
            setTimeout(()=>{
                notification("#F44336", "white", backendData.message);
            }, 5000)
        } else {
            setTimeout(()=>{
                notification("#2196F3", "white", `Backend: ${backendData.message}`);
            }, 5000)
        }

    } catch (error) {
        Loader_info_remove();
        console.error("Parallel service start error:", error);
        notification("#F44336", "white", "Failed to start services.");
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
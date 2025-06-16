import { Loader, Remove_Loader } from "../../../loader.js";
import { notification } from "../../../Notification.js";
import { get_Common_Variables_Of_Script } from "../../Utilities/function_image_utilities/Common_varaibles_script.js";
import { get_Id_Array_Script } from "../../Utilities/function_image_utilities/script.js_variables.js";

let Id_array_script = get_Id_Array_Script();
let common_variables = get_Common_Variables_Of_Script();

export function Post_images() {
    Id_array_script[4].addEventListener("submit", function (e) {
        Loader(Id_array_script[0], Id_array_script[4], 2);
        e.preventDefault();
        const coin_of = document.getElementById("coin_of").value.trim();
        document.getElementById("coin_of").disabled = true;
        Id_array_script[0].disabled = true;
        Id_array_script[2].disabled = true;
        if (!coin_of) {
            form_validation__(document.getElementById("coin_of"), Id_array_script[0],
                Id_array_script[2], Remove_Loader, "Coin name is required!");
            return;
        }
        if (coin_of.length < 3) {
            form_validation__(document.getElementById("coin_of"), Id_array_script[0], Id_array_script[2], Remove_Loader, "Coin name must be at least 3 characters!");
            return;
        }
        fetch("https://coin-of-gate-way.onrender.com/api_gate_way/post_image__", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": parseInt(localStorage.getItem('key'))
            },
            body: JSON.stringify({
                img_url: common_variables[1],
                date: new Date().toLocaleString(),
                coin_of: coin_of
            }),
        })
            .then(async (res) => {
                if (!res.ok) {
                    const errorData = await res.json();
                    Remove_Loader(Id_array_script[0], Id_array_script[4], 2);
                    notification("#F44336", "white", errorData.message);
                    document.getElementById("coin_of").disabled = true;
                    Id_array_script[0].disabled = true;
                    Id_array_script[2].disabled = true;
                    Id_array_script[4].reset();
                    Id_array_script[3].innerHTML = "";
                    Id_array_script[1].innerText = "0 mb";
                    throw new Error(`${res.status} - ${errorData.message}`);
                }
                return res.json();
            })
            .then((data) => {
                Remove_Loader(Id_array_script[0], Id_array_script[4], 2);
                notification("#2196F3", "white", "Uploaded Successful!")
                setTimeout(() => {
                    document.getElementById("coin_of").disabled = false;
                    Id_array_script[0].disabled = false;
                    Id_array_script[2].disabled = false;
                }, 4000)
                Id_array_script[4].reset();
                Id_array_script[3].innerHTML = "";
                Id_array_script[1].innerText = "0 mb";
            })
            .catch((error) => {
                console.error("❌ Upload error:", error);
            });
    });

    function form_validation__(item1, item2, item3, Remove_Loader, info) {
        item1.disabled = false;
        item2.disabled = false;
        item3.disabled = false;
        Remove_Loader(Id_array_script[0], Id_array_script[4], 2);
        alert(info);
    }
}
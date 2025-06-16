export function notification(bg, color, mes) {
    let notification_body = document.createElement("div");
    notification_body.style.position = "absolute";
    notification_body.style.top = "4px";
    notification_body.style.left = 0;
    notification_body.style.height = "50px";
    notification_body.style.display = "flex";
    notification_body.style.justifyContent = "center";
    notification_body.style.alignItems = "center";
    notification_body.style.fontWeight = "800";
    notification_body.style.fontSize = "large";
    notification_body.style.padding = "4px";
    notification_body.style.transform = "translateX(-1000vw)";
    notification_body.style.transition = "all 0.4s ease";
    notification_body.style.fontFamily = "'Courier New', Courier, monospace"
    notification_body.style.zIndex = 8;

    notification_body.style.backgroundColor = bg;
    notification_body.style.color = color;
    notification_body.innerText = mes;

    function myFunction(x) {
        if (x.matches) {
            notification_body.style.width = "-webkit-fill-available";
        } else {
            notification_body.style.width = "fit-content";
        }
    }

    var x = window.matchMedia("(max-width: 700px)")

    myFunction(x);

    x.addEventListener("change", function () {
        myFunction(x);
    });

    notification_body.style.transform = "translateX(0)";

    setTimeout(() => {
        notification_body.style.transform = "translateX(-1000vw)";
    }, 4000)
    document.body.insertBefore(notification_body, document.body.firstChild);
    setTimeout(() => {
        notification_body.remove();
    }, 4500);
}

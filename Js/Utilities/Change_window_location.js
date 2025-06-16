export function change_window_location(href_) {
    let startX = 0;
    let endX = 0;

    // For touch devices
    window.addEventListener("touchstart", (e) => {
        startX = e.changedTouches[0].screenX;
    });
    window.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    // For desktop
    window.addEventListener("dblclick", (e) => {
        window.location.href = href_;
    });

    function handleSwipe() {
        const diff = startX - endX;
        if (diff > 50) {
            window.location.href = href_; // Swipe Left
        }
    }
}
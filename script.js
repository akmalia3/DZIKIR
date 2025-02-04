let count = localStorage.getItem("dzikirCount") ? parseInt(localStorage.getItem("dzikirCount")) : 0;
document.getElementById("counter").textContent = count;

function incrementCounter() {
    count++;
    document.getElementById("counter").textContent = count;
    localStorage.setItem("dzikirCount", count);

    // Play sound
    let sound = document.getElementById("clickSound");
    sound.play();

    // Vibrate (if supported)
    if (navigator.vibrate) {
        navigator.vibrate(100);
    }
}

function resetCounter() {
    count = 0;
    document.getElementById("counter").textContent = count;
    localStorage.setItem("dzikirCount", count);
}

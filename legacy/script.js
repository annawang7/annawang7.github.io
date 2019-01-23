var led_matrix = document.getElementById("led_matrix");

function init() {
    var matrixPixelWidth = window.getComputedStyle(led_matrix).width;
    var numCols = matrixPixelWidth / 20;
    console.log(numCols);
    for(var rows = 0; rows < 8; rows++) {
        for (var col = 0; col < numCols; col++) {
            var led = document.createElement("div");
            led.className = "led";
            led_matrix.appendChild(led)
        }
        led_matrix.appendChild(document.createElement("br"));
    }
}

init();
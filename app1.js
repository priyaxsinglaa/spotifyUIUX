const toggleButton = document.getElementById('toggleButton');
const list = document.getElementById('list');


toggleButton.addEventListener('click', function() {    
    if (list.classList.contains("hidden")) {
        list.classList.remove("hidden");
    } else {
        list.classList.add("hidden");
    }
});

var musicSlider = document.getElementById("musicSlider");

musicSlider.addEventListener("input", function(event) {
    // Simulate music control logic
    console.log("Music control value: " + event.target.value);
});
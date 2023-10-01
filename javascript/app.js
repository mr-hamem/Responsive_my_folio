const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});
// jQuery to hide the preloader when the page is fully loaded
$(window).on("load", function () {
    var preloader = $(".preloader");
    var content = $(".content");

    setTimeout(function () {
        preloader.hide();
        content.show();
    }, 2000); // Adjust the time as needed
});



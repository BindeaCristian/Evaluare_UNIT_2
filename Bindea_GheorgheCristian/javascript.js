function Slideshow() {
    var x = document.getElementById("slideshow-div-div");
    var y = document.getElementById("imagini-resurse");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "flex";
    }
}

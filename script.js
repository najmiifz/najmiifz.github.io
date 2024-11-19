const carouselItems = document.querySelectorAll(".carousel-item")

window.addEventListener("click", function(e) {
    if (e.target.classList == "dropdown-item") {
        carouselItems.forEach(carousel => {
            carousel.classList.remove("active")
            if (e.target.textContent == carousel.id) {
                carousel.classList.add("active")
            }
        });
    }
})
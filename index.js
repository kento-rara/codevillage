document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("ham-btn").addEventListener("click", function () {
        this.classList.toggle("active");
        document.getElementById("ham-menu").classList.toggle("active");
    })
});
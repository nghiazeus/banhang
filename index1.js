gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll(".section");

sections.forEach((section, index) => {
    gsap.fromTo(
        section, { opacity: 0, y: 50 }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            }
        }
    );
});
// -----------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".navbar-toggler");
    const mobileMenu = document.getElementById("mobileMenu");

    toggleButton.addEventListener("click", function() {
        mobileMenu.classList.toggle("show");
    });
});

// ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const productLinks = document.querySelectorAll(".product-card a");

    productLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định
            // Đoạn mã xử lý khác tùy theo nhu cầu
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const formSection = document.querySelector(".forms_section");

    function handleScroll() {
        const rect = formSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            formSection.classList.add("visible");
            formSection.classList.remove("hidden");
            window.removeEventListener("scroll", handleScroll);
        }
    }

    formSection.classList.add("hidden");
    window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    const formSection = document.querySelector(".one_section");

    function handlScroll() {
        const rect = formSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            formSection.classList.add("visible");
            formSection.classList.remove("hidden");
            window.removeEventListener("scroll", handlScroll);
        }
    }

    formSection.classList.add("hidden");
    window.addEventListener("scroll", handlScroll);
});

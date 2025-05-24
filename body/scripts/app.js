document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("goToServicesDiv");
    const target = document.getElementById("targetSection");
    const buttonGerman = document.getElementById("goToServicesDivGerman");
    const targetGerman = document.getElementById("targetSectionGerman");

    buttonGerman.addEventListener("click", function(){
       targetGerman.scrollIntoView({ behavior: "smooth" })
    })

    button.addEventListener("click", function () {
        target.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
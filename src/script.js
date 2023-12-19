// smooth scroll
document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }); //end

// navbar scroll
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("bg-putih", "shadow-custom");
    } else {
      navbar.classList.remove("bg-putih", "shadow-custom");
    }
  });
});
  
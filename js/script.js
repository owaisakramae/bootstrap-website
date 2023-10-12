const navbar = document.getElementById("main-navbar");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add("navbar-after-scroll");
  } else {
    navbar.classList.remove("navbar-after-scroll");
  }
});
AOS.init();
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function setActiveSection() {
    let activeLink = null;

    sections.forEach((section) => {
      if (isInViewport(section) || section.offsetTop <= window.scrollY) {
        activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
      }
    });

    navLinks.forEach((link) => {
      if (link === activeLink) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveSection);
  setActiveSection();
});
function darkTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var btnText = document.querySelector(".btn-text");
  var icon = document.querySelector(".btn i");
  var homeLeft = document.querySelector("#home .home-left");

  if (element.classList.contains("dark-mode")) {
    btnText.textContent = "Light Mode";
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    btnText.textContent = "Dark Mode";
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

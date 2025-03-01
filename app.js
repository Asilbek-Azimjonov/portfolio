const navItems = document.querySelectorAll(".links");
const header = document.querySelector(".header");

navItems.forEach((nav) => {
  nav.addEventListener("click", function (e) {
    navItems.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

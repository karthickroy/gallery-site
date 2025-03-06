const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hide");
  navMenu.classList.toggle("nav-animate");
  navMenu.classList.toggle("nav-mobile");
});
// select all filter buttons //
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

const filterCards = (event) => {
  document.querySelector(".active").classList.remove("active");
  event.target.classList.add("active");
  filterableCards.forEach((card) => {
    if (
      card.dataset.name === event.target.dataset.name ||
      event.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
      card.classList.remove("animate-out");
    } else {
      card.classList.add("animate-out");
      setTimeout(() => {
        card.classList.add("hide");
      }, 500);
    }
  });
};

// document.querySelector(".active").classList.remove("active");

filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);

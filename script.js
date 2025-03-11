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
console.log(filterableCards);
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

const images = [
  {
    alt: "toys",
    imgSrc: "./toys/toy-1.avif",
  },
  {
    alt: "toys",
    imgSrc: "./toys/toy-2.avif",
  },
  {
    alt: "toys",
    imgSrc: "./toys/toy-3.avif",
  },
  {
    alt: "toys",
    imgSrc: "./toys/toy-4.avif",
  },
  {
    alt: "toys",
    imgSrc: "./toys/toy-5.avif",
  },
  {
    alt: "toys",
    imgSrc: "./toys/toy-6.avif",
  },
  {
    alt: "animal",
    imgSrc: "./animal/animal-1.avif",
  },
  {
    alt: "animal",
    imgSrc: "./animal/animal-2.avif",
  },
  {
    alt: "animal",
    imgSrc: "./animal/animal-3.avif",
  },
  {
    alt: "animal",
    imgSrc: "./animal/animal-4.avif",
  },
  {
    alt: "animal",
    imgSrc: "./animal/animal-5.avif",
  },
  {
    alt: "animal",
    imgSrc: "./animal/animal-6.avif",
  },
  {
    alt: "photography",
    imgSrc: "./photography/photo-1.avif",
  },
  {
    alt: "photography",
    imgSrc: "./photography/photo-2.avif",
  },
  {
    alt: "photography",
    imgSrc: "./photography/photo-3.avif",
  },
  {
    alt: "photography",
    imgSrc: "./photography/photo-4.avif",
  },
  {
    alt: "photography",
    imgSrc: "./photography/photo-5.avif",
  },
  {
    alt: "photography",
    imgSrc: "./photography/photo-6.avif",
  },
  {
    alt: "art work",
    imgSrc: "./art-work/art1.avif",
  },
  {
    alt: "art work",
    imgSrc: "./art-work/art-2.avif",
  },
  {
    alt: "art work",
    imgSrc: "./art-work/art-3.avif",
  },
  {
    alt: "art work",
    imgSrc: "./art-work/art-4.avif",
  },
  {
    alt: "art work",
    imgSrc: "./art-work/art-5.avif",
  },
  {
    alt: "art work",
    imgSrc: "./art-work/art-6.avif",
  },
  {
    alt: "cricket player",
    imgSrc: "./cricket/cricket-1.avif",
  },
  {
    alt: "cricket player",
    imgSrc: "./cricket/cricket-2.avif",
  },
  {
    alt: "cricket player",
    imgSrc: "./cricket/cricket-3.avif",
  },
  {
    alt: "cricket player",
    imgSrc: "./cricket/cricket-4.avif",
  },
  {
    alt: "cricket player",
    imgSrc: "./cricket/cricket-5.avif",
  },
  {
    alt: "cricket player",
    imgSrc: "./cricket/cricket-6.avif",
  },
  {
    alt: "phones",
    imgSrc: "phones/phone-1.avif",
  },
  {
    alt: "phones",
    imgSrc: "phones/phone-2.avif",
  },
  {
    alt: "phones",
    imgSrc: "phones/phone-3.avif",
  },
  {
    alt: "phones",
    imgSrc: "phones/phone-4.avif",
  },
  {
    alt: "phones",
    imgSrc: "phones/phone-5.avif",
  },
  {
    alt: "phones",
    imgSrc: "phones/phone-6.avif",
  },
  {
    alt: "animal",
    imgSrc: "./animal/animal-1.avif",
  },
  {
    alt: "animal",
    imgSrc: "./animal/animal-2.avif",
  },
  {
    alt: "animal",
    imgSrc: "./animal/animal-3.avif",
  },
  {
    alt: "animal",
    imgSrc: "./animal/animal-4.avif",
  },
  {
    alt: "animal",
    imgSrc: "./animal/animal-5.avif",
  },
  {
    alt: "animal",
    imgSrc: "./animal/animal-6.avif",
  },
];

const container = document.querySelectorAll("filterable_cards");

container.forEach((card) => {
  const imgElement = document.createElement("img");
  imgElement.src = card.imgSrc;
  imgElement.alt = card.alt;

  container.appendChild(imgElement);
});

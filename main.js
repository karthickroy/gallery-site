async function LoadImages() {
  let container = document.getElementById("img-card-container");
  const res = await fetch("http://localhost:3000/images/");
  const data = await res.json();
  if (data?.length > 0) {
    data.forEach((imgObj) => {
      container.appendChild(createImageCard(imgObj.category, imgObj.src));
    });
  } else {
    document.getElementsByTagName("body").innerHTML = "no images found";
  }
}
LoadImages();

function createImageCard(name, imgSrc) {
  const el = document.createElement("div");
  el.classList.add("card");
  el.dataset.name = name;
  el.innerHTML = `
      <img data-mine
      data-zoomable
      src="${imgSrc}"
      alt=""
      height="200"
      />
      `;
  return el;
}

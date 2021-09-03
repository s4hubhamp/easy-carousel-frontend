const JavaScript = `
const carouselContainer = document.getElementById("carousel-container");
const slideContainer = document.createElement("div");

slideContainer.classList.add("slide");

const dashesContainer = document.createElement("div");
dashesContainer.classList.add("dashes");
const dashes = createDashButtons();
dashes.forEach((dash) => {
  dashesContainer.appendChild(dash);
});

setCurrentPhoto(photos[0].id);

carouselContainer.appendChild(slideContainer);
carouselContainer.appendChild(dashesContainer);

const infoText = "created by ";
const info = document.createElement('h1');

const span = document.createElement('span');
span.innerText = "Easy Carousel";

info.innerText = infoText;
info.classList.add('info');

info.appendChild(span);


carouselContainer.appendChild(info);

function setCurrentPhoto(id) {
  const photo = photos.find((p) => p.id === id);

  const previousImgEl = slideContainer.firstElementChild;
  if(previousImgEl) previousImgEl.remove();

  const slideImage = document.createElement("img");
  slideContainer.appendChild(slideImage);

  slideImage.src = photo.regular;
  slideImage.style.transform = 'rotate('+photo.angle+'deg)';
  setActiveDash(id);
}

function setActiveDash(id) {
  const requiredDash = dashes.find((d) => d.id === id);
  dashes.forEach((d) => d.classList.remove("active-dash"));
  requiredDash.classList.add("active-dash");
}

function createDashButtons() {
  const dashesArray = photos.map((p) => {
    const dash = document.createElement("button");
    dash.type = "button";
    dash.id = p.id;
    dash.classList.add("dash");
    dash.addEventListener("click", (event) => {
      setCurrentPhoto(event.target.id);
    });

    return dash;
  });

  return dashesArray;
}`;

export default JavaScript;

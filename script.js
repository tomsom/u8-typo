// the number of images/stations/and slides displayed
const number_of_images = 24;

//arrray containing all images
const image = [];

//numnber of the current slide
var slideIndex = 1;

// contains all station names
const station_list_names = [
  "Hermannstraße",
  "Leinestraße",
  "Boddinstraße",
  "Hermannplatz",
  "Schönleinstraße",
  "Kottbusser Tor",
  "Moritzplatz",
  "Heinrich-Heine-Straße",
  "Jannowitzbrücke",
  "Alexanderplatz",
  "Weinmeisterstraße",
  "Rosenthaler Platz",
  "Bernauer Straße",
  "Voltastraße",
  "Gesundbrunnen",
  "Pankstraße",
  "Osloer Straße",
  "Franz-Neumann-Platz",
  "Residenzstraße",
  "Paracelsus-Bad",
  "Lindauer Allee",
  "Karl-Bonhoeffer-Nervenklinik",
  "Rathaus Rienickendorf",
  "Wittenau"
];

window.onload = function() {
  loadImages();
  addStationLinks();
  showSlide(slideIndex);
};

document.addEventListener('keyup', (e) => {
  if (e.code === "ArrowRight" || e.code === "Space" || e.code === "Enter" || e.code === "KeyL" || e.code === "KeyD") {plusSlides(+1);}
  else if (e.code === "ArrowLeft" || e.code === "Backspace" || e.code === "KeyA" || e.code === "KeyJ") {plusSlides(-1);}
  console.log(e.code);
});

function loadImages() {
  // loop through all images
  for (let i = 0; i < number_of_images; i++) {

    var div = document.createElement("div");
    div.classList.add("img__holder");
    // create image element and add class
    var img = document.createElement("img");
    img.classList.add("img__image");

    var overlay = document.createElement("img");
    overlay.classList.add("img__overlay")
    overlay.src = "img/metro_overlay.svg";
    // add image source to element 
    let img_number = i + 1;
    img.src = "img/"+img_number+".JPG";
    // add image and overlay to holding div
    div.appendChild(img);
    div.appendChild(overlay);
    // add the image to its parent (slideshow)
    var slideshow = document.getElementById("slideshow");
    slideshow.appendChild(div);
    // add image to js array
    image[i] = div;
    // image[i] = img;

  }
}

function addStationLinks() {
  // get station list (ul)
  const station_list = document.getElementById("station_list");
  // loop to add all links
  for (let i = 0; i < number_of_images; i++) {
    // create a list element and a link
    var li = document.createElement("li");
    var a = document.createElement("a");
    // add text and click listener to link
    a.innerText += station_list_names[i];
    a.classList.add("station_link")
    a.addEventListener("click", function() {
      // change slideIndex and slide on click
      slideIndex = i + 1;
      showSlide(slideIndex);
    });
    // add link to li and li to station list
    li.appendChild(a);
    station_list.appendChild(li);
  }
  // eventually add hr to ul for decoration
  // var hr = document.createElement("hr");
  // station_list.appendChild(hr);
}

function plusSlides(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  var i;
  // go to first slide when after end
  if (n > image.length) {
    // slideIndex = 1;
    // go to last/credit/about page?
    slideIndex = image.length;
  }
  // go to last slide when before beginning
  if (n < 1) {
    // slideIndex = image.length;
    // go to first/landing page? 
    slideIndex = 1;
  }
  //remove all images
  for (i = 0; i < image.length; i++) {
//     image[i].style.display = "none";
    image[i].children.item(0).classList.remove("img__image_active");
    image[i].children.item(1).classList.remove("img__overlay_active");
  }
  document.body.classList.add("ylw_bg");
   console.log(slideIndex);
   
  var slideshow = document.getElementById("slideshow");
  var translation_length = (100 * slideIndex) - 100;
  // slideshow.translate(translation_length,0);
  const position = `translate(-${translation_length}vw,0)`;
  slideshow.style.transition = "all ease-in-out .6s";
  setTimeout(function() {
    slideshow.style.transform = position;
  }, 200);

  setTimeout(function() {
    image[slideIndex-1].children.item(0).classList.add("img__image_active");
    image[slideIndex-1].children.item(1).classList.add("img__overlay_active");
    document.body.classList.remove("ylw_bg");

  }, 800);
  // slideshow.style.transform = "translate-x(-100vw)";

  // slideshow.classList.add("trans");/
  // display respective image
  // image[slideIndex-1].style.display = "block";
}

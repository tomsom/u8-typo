
// the number of images/stations/and slides displayed
const number_of_images = 24;

//arrray containing all images
const image = [];
const station_links = [];

//numnber of the current slide
var slideIndex = 13;

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

// get the root element
var r = document.querySelector(':root');

window.onload = function() {
  loadImages();
  addStationLinks();
  showSlide(slideIndex);
};

// keylistener
document.addEventListener('keyup', (e) => {
  // slide further/to right
  if (e.code === "ArrowRight" || e.code === "Space" || e.code === "Enter" || e.code === "KeyL" || e.code === "KeyD") {
    showSlide(slideIndex + 1);
  }
  // slide backwards/to left
  else if (e.code === "ArrowLeft" || e.code === "Backspace" || e.code === "KeyA" || e.code === "KeyJ") {
    showSlide(slideIndex - 1);
  }
});

function loadImages() {
  // loop through all images
  for (let i = 0; i < number_of_images; i++) {
    // create holding div for image and overlay
    var div = document.createElement("div");
    div.classList.add("img__holder");
    // create image element and add class
    var img = document.createElement("img");
    img.classList.add("img__image");
    // add image source
    let img_number = i + 1;
    img.src = "img/"+img_number+".JPG";
    // create overlay image, add class and source
    var overlay = document.createElement("img");
    overlay.classList.add("img__overlay")
    overlay.src = "img/metro_overlay.svg";
    // add image and overlay to holding div
    div.appendChild(img);
    div.appendChild(overlay);
    // add the image to its parent (slideshow)
    var slideshow = document.getElementById("slideshow");
    slideshow.appendChild(div);
    // add image to js array
    image[i] = div;
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
      showSlide(i + 1);

    });
    // add link to li and li to station list
    li.appendChild(a);
    station_list.appendChild(li);
    // add link to array
    station_links[i] = a;
  }
  console.log(station_links);
}

function showSlide(index) {
  // determine slide index difference
  var difference = index - slideIndex;
  // set new slide index
  slideIndex = index;
  console.log("SlideIndex: " + slideIndex);
  console.log("Index Difference: " + difference);

  if (index > image.length) {
    // go to last/credit/about page?
    slideIndex = image.length;
  }
  if (index < 1) {
    // go to first/landing page? 
    slideIndex = 1;
  }


  // ANIMATIONS
  // I. clean up
  // make overlay appear and zoom out of image
  // remove active station link highlighting
  for (let i = 0; i < image.length; i++) {
    image[i].children.item(0).classList.remove("img__image_active");
    image[i].children.item(1).classList.remove("img__overlay_active");
    station_links[i].classList.remove("station_link_active");
    station_links[i].style.setProperty('--dot-scale-factor', '0.8');
  }

  // II. instant changes
  // make blue background yellow
  document.body.classList.add("ylw_bg");
  // add active link highlighting
  station_links[slideIndex-1].classList.add("station_link_active");
  station_links[slideIndex-1].style.setProperty('--dot-scale-factor', '1.2');

  // III. start shortly delayed sliding animation
  // determine transition time; min: 600ms, max: 2800ms
  transition_time = Math.abs(difference) * 100 + 500;
  var transition_time_string = transition_time / 1000 + "s";
  // get slideshow and add properties
  var slideshow = document.getElementById("slideshow");
  slideshow.style.transitionDuration = transition_time_string;
  var translation_length = (100 * slideIndex) - 100;
  var position = `translate(-${translation_length}vw,0)`;

  // animate slideshow
  setTimeout(function() {
    slideshow.style.transform = position;
  }, 200);
  console.log("statiion dot dif: " + difference);
  // messed up and unclean dot animations
  if (difference > 0) {
    for(let i = 0; i < Math.abs(difference); i++) {
      dotAnimUp(i, difference, transition_time);
    }
  }
  if (difference < 0) {
    for(let i = 0; i < Math.abs(difference); i++) {
      let im = (i * -1) - 1;
      dotAnimDown(im, difference, transition_time);
    }
  }


  // IV. end of animation
  // make overlay disappear and zoon into image
  // make bg blue again
  setTimeout(function() {
    image[slideIndex-1].children.item(0).classList.add("img__image_active");
    image[slideIndex-1].children.item(1).classList.add("img__overlay_active");
    document.body.classList.remove("ylw_bg");
  }, transition_time);
}


function dotAnimDown(i, difference, transition_time) {
  setTimeout(function() {
    var current = slideIndex - difference - 1 + i;
    station_links[current + 1].style.setProperty('--dot-scale-factor', '0.8');
    station_links[current].style.setProperty('--dot-scale-factor', '1.5');
  }, (transition_time / Math.abs(difference)) * Math.abs(i) );
}

function dotAnimUp(i, difference, transition_time) {
  setTimeout(function() {
    var current = slideIndex - difference + i;
    station_links[current - 1].style.setProperty('--dot-scale-factor', '0.8');
    station_links[current].style.setProperty('--dot-scale-factor', '1.5');
  }, (transition_time / Math.abs(difference)) * Math.abs(i) );
}

// the number of images/stations/and slides displayed
const number_of_images = 24;

//arrray containing all images
const image = [];
const station_links = [];

//numnber of the current slide
var slideIndex = 1;

// canvas
var canvasIndex = 0;

// var started = false;


// dot scale factor
let dsf = 1.4;
let dsf_big = 1.7;

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

const station_descriptions = [
  'Die ersten Pläne für den U-Bahnhof Hermannstraße gab es bereits 1910. Aus politischen und finanziellen Gründen wurde die Station erst 86 Jahre später eröffnet. Der U-Bahnhof ist von Felix Scholz, mit dem Thema "Großstadtdschungel" gestaltet worden.',
  "Die hellgrünen Fliesen geben mit Absicht einen Unruhigen Eindruck. Die Station Leinestraße wurde vor der Hermannstraße eröffnet. Der schon fertige Teil des Tunnels in Richtung Hermannstraße diente als Luftschutzbunker im 2.WK. Wegen Kriegsschäden blieb der Bahnhof für einen Monat geschlossen.",
  "Der Bahnhof ist nach Hermann Boddin benannt. Er war ein Gemeindevorsteher und Bürgermeister von Rixdorf, dem heutigen Neukölln. Rixdorf hatte einen zweifelhaften Ruf, deshalb wollte Hermann Boddin, Rixdorf in Herrmannstadt umbenennen. Schlussendlich wurde es jedoch Neukölln.",
  "Die von den Architekten Alfred Grenander und Alfred Fehse entworfene Bahnstation, wurde 1927 eröffnet. ",
  "Von 1951 bis 1992 hieß der Bahnhof Kottbusser Damm. Umbenannt wurde er nach Johann Lukas Schönlein, dieser war Tuberkuloseforscher im 19. Jh.",
  "Im August 1940 traf eine Bombe den U-Bahntunnel am Kottbusser Tor, sie detonierte nicht und richtete geringen Schaden an.",
  'Eigentlich sollte die U8 statt unter den Moritzplatz unter den Oranienplatz führen. Der Bahnhof Oranienplatz wurde fertig gestellt, er befindet sich einige Straßen entfernt und blieb ungenutzt. Gerüchte besagen, dass der Kaufhauskonzern "Wertheim" durch Bestechung dafür gesorgt hat, dass ihre Filiale am Moritzplatz die U8-Anbindung bekommt. Der Stationsname hat eine größere Laufweite als der, der anderen Stationen mit einer ähnlichen Schrift.',
  'Der Bahnhof trug zunächst den Namen "Neanderstraße". 1960 wurde dieser und die darüber liegende Straße in Heinrich-Heine-Straße umbenannt. Er war der erste Geisterbahnhof aus südlicher Richtung. Das  gemeine "t" besitzt einen horizontalen Ansatz, bei dem Stationsschild der Heinrich-Heine-Straße.',
  "Nach dem Mauerfall wurde der U-Bahnhof als Grenzübergangsstelle wiedereröffnet. Er hatte eine wichtige Rolle im Grezverkehr.",
  "Nach dem Bau der Mauer wurden die Zugänge zum Geisterbahnsteig der U8 vermauert. Die gemauerten Stellen wurden mit Bahnhofstypischen Fliesen verkleidet um die Existenz des Bahnsteiges zu kaschieren.",
  "Die namensgebende Straße hieß erst Weinmeister Gasse. Sie verlief durch den Garten eines Weinmeisters. Weinmeister ist die Berufsbezeichnung für einen Wirt, der Wein ausschenkt, einen Weinhändler oder Winzer. Die Gasse wurde 1810 zur Straße umbenannt.",
  "Die Wände, des von Alfred Grenander entworfenen Bahnhofs, sind mit orangefarbenen Fliesen verkleidet. Die orangenen Fliesen sind mit einer Uranglasur überzogen, diese sei ungefährlich.(https://www.tagesspiegel.de/berlin/bleibende-werte-1545553.html).",
  "Der zugemauerte Zugang zum U-Bahnhof Bernauer Straße wurde erst 1990 wieder nach Ostberlin geöffnet. Aus Platzmangel konnte vorher keine Grenzübergansstelle eingerichtet werden. Die Laufweite der Buchstaben im Stationsschild ist weit. Andere Stationschschilder mit ähnlicher Schrift haben nächer gesetzte Buchstaben.",
  "Nach dem Mauerbau war der Bahnhof bis 1977 mit dem Gesundbrunnen einer von zwei U-Bahnhöfen nördlich des Ostsektors.",
  "Bis 1977 war der U-Bahnhof Gesundbrunnen die Endstation der U8 in Richtung Norden. Er wurde im zweiten Weltkrieg als Luftschutzanlage verwendet.",
  'Die Station wurde als Mehrzweckanlage gebaut. Sie kann als Bürgersteig und im Katastrophenfall als Schutzraum verwendet werden. Der Architekt Rainer G. Rümmler entschied sich beim Stationsschild für die Schauschrift „Octopuss“, von Colin Brignall. Er wollte der Station das Erscheinungsbild der 70er Jahre geben. Warum Pankstraße auf dem Stationsschild mit doppeltem s geschrieben wurde, bleibt ungeklärt .',
  'Die Hintergleiswände der Station sind mit Norwegischen Fahnen bemalt. Die Schrift des Stationsnamens ist serifenlos, hat eine nahezu gleichmäßige Strichstärke und ähnelt der "Akzidenz Grotesk“, die 1896 von G. Lange entwickelt wurde.',
  "Der Bahnhof trägt den Namen des SPD-Politikers Franz Neumann. Er war 1946-1958 Vorsitzender, der Berliner SPD und gehörte als Mitglied dem Deutschen Bundestag an.  Die Station wurde 1987 eröffnet. An den Hintergleiswänden sind Bäume dargestellt. Für das Stationsschild wurde eine Groteske Schrift mit nahezu keinem Strichstärkekontrast verwendet.",
  'Die Wände sind im Farbton vergilbten Papiers gestaltet. Es sind Stadtansichten Berlins aus der Befestigungszeit zu sehen. Für das Stationsschild wurde eine "Windsor"-Schrift verwendet. Sie hat Serifen, unterschiedliche Strichstärken und ist somit eine Antiqua. Die Schrift zeichnet sich durch eine starke Achsenneigung aus. Die Minuskeln der Buchstaben a, h, m und n haben einen abgewinkelten rechten Stamm. Die Versalien P und R haben große Bäuche.',
  "Der Bahnhof trägt den Namen eines, nahe gelegenen Hallenbades. Den Innenraum des Bahnhofs hat der Architekt Rainer G. Rümmler gestaltet.",
  'Die Station liegt unter der namensgebenden Lindauer Allee. Die Gestaltung, der 1994 eröffneten Station greift den Stationsnamen auf. Der Architekt Rainer G. Rümmler verwendete eine farbenfrohe Darstellung des Lindenbaumes, angelehnt an das Stadtwappen von Lindau(Bodensee). Es gibt ausschließlich ein modernes Stationsschild, mit der aktuellen Unternehmensschrift der BVG. In allen anderen Bahnhöfen der U8 gibt es ein Stationsschild mit alter Schriftart und eines mit der von Erik Spiekermann entwickelten „FF Transit“.',
  "Die Wände der Station sind mit roten und hellbraunen Klinkern verkleidet. Sie erinnern an die Klinikbauten der namensgebenden, ehemaligen Nervenklinik. Die Schrift des Stationsnamens ist serifenlos, mit leichtem Strichkontrast.",
  "Die Hintergleiswände des Bahnhofs sind mit roten Klinkern und Naturstein verkleidet. Die Farbgebung erinnert an das Namensgebende Rathaus Reinickendorf.",
  "Der U-Bahnhof Wittenau ist die Endstation der U8, in nördlicher Richtung. Der Architekt Rainer G. Rümmler gestaltete die Wände mit grünen und gelben Kacheln. Das Stationsschild ist Monolinear und komplett mit Grotesken Versalien (Großbuchstaben) geschrieben."
];

const infoParagraph = document.getElementById("infoParagraph");

var anim_going = false;

window.onload = function() {
  loadImages();
  addStationLinks();
  showSlide(1);
  hover(document.getElementById("start"), document.getElementById("img_metro"), "scale_img_metro");
  hover(document.getElementById("key_right"), document.getElementById("img_metro"), "scale_img_metro");
  // hover(document.getElementById("key_left"), document.getElementById("img_metro"), "scale_img_metro");
  // hmm solution possible??
  station_links[2].style.setProperty('--dot-scale-factor', dsf_big);
};

function hover(element, target, className){
  element.addEventListener('mouseenter', e => target.classList.add(className));
  element.addEventListener('mouseleave', e => {if (canvasIndex == 0) target.classList.remove(className)});
}

// keylistener
document.addEventListener('keydown', (e) => {
  // slide further/to right
  if (e.code === "ArrowRight"
  || e.code === "Space"
  ||e.code === "Enter"
  || e.code === "KeyL"
  || e.code === "KeyD") {
    if (canvasIndex == 0) {
      document.getElementById("img_metro").classList.add("scale_img_metro");
      slideCanvas(1, 1);
      return;
    }
    showSlide(slideIndex + 1);
  }
  // slide backwards/to left
  else if (e.code === "ArrowLeft" 
  || e.code === "Backspace" 
  || e.code === "KeyA" 
  || e.code === "KeyJ") {
    if (canvasIndex == 2) {
      document.getElementById("img_metro_back").classList.add("scale_img_metro");
      slideCanvas(1, 24);
      return;
    }
    showSlide(slideIndex - 1);
  }

  // started = true;
});

function slideCanvas(n, slide) {
  canvasIndex = n;
  if (n != 1) {
    document.body.classList.add("ylw_bg");
    setTimeout(function() {
      canvasTransition();
      setTimeout(function() {
        document.getElementById("img_metro").classList.remove("scale_img_metro");
        document.getElementById("img_metro_back").classList.remove("scale_img_metro");
      }, 300);
    }, 300);
   

  } else {
    // document.getElementById("img_metro").classList.add("scale_img_metro");
    setTimeout(function() {
      canvasTransition();
    }, 90);
  }
  function canvasTransition () {
    var translation_length = n * 100;
    var position = `translate(-${translation_length}vw,0)`;
    canvas.style.transform = position;
    showSlide(slide);
  }
}

function slideBy(n) {
  showSlide(slideIndex+n);
}

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
    img.src = "img/"+img_number+".jpg";
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
    station_links[i] = li;
  }
}

function showSlide(index) {

  // do not execute if slideshow not visible

  // if (started == false) return;


  // if (canvasIndex < 1) {
  //   slideCanvas(1);
  //   canvasIndex = 1;
  // }

  if (canvasIndex != 1) return;


  if (index > image.length) {
    // go to last/credit/about page?
    slideCanvas(2);
    return;
    slideIndex = image.length;
  }
  if (index < 1) {
    // go to first/landing page? 
    console.log("get back");
    slideCanvas(0);
    return;
    slideIndex = 1;
  }

  if(anim_going) return;

  anim_going = true;

  // determine slide index difference
  var difference = index - slideIndex;
  // if(difference == 0) difference = 1;
  // set new slide index
  slideIndex = index;

  // ANIMATIONS
  // I. clean up
  // make overlay appear and zoom out of image
  // remove active station link highlighting
  for (let i = 0; i < image.length; i++) {
    image[i].children.item(0).classList.remove("img__image_active");
    image[i].children.item(1).classList.remove("img__overlay_active");
    station_links[i].classList.remove("station_link_active");
    station_links[i].style.setProperty('--dot-scale-factor', dsf);
  }

  // II. instant changes
  // make blue background yellow
  document.body.classList.add("ylw_bg");
  // add active link highlighting
  station_links[slideIndex-1].classList.add("station_link_active");
  // station_links[slideIndex-1].style.setProperty('--dot-scale-factor', '1.4');

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

  for(let i = 0; i < Math.abs(difference); i++) {
    console.log("hell")
    var iterations = i;
    var back = 0;
    if(difference < 0) iterations = (i * -1);
    // i dont know why but it works lol
    if(difference < 0) back = -2;
    dotAnim(iterations, difference, transition_time, back);
  }


  function dotAnim(i, difference, transition_time, back) {
    setTimeout(function() {
      var current = slideIndex - difference + i + back;

      // console.log("SlideIndex: " + slideIndex);
      // console.log("Index Difference: " + difference);
      // var oldStation = slideIndex - difference;#926927
      // console.log("old: index - diff: " + oldStation);
      console.log("current: old + i " + current);
      var po_ne = difference / Math.abs(difference);
      console.log("Diff. dir " + po_ne);

      station_links[current - (difference / Math.abs(difference))].style.setProperty('--dot-scale-factor', dsf);
      station_links[current].style.setProperty('--dot-scale-factor', dsf_big);
    }, (transition_time / Math.abs(difference)) * Math.abs(i) );
  }


  // IV. end of animation
  // make overlay disappear and zoon into image
  // make bg blue again
  setTimeout(function() {
    image[slideIndex-1].children.item(0).classList.add("img__image_active");
    image[slideIndex-1].children.item(1).classList.add("img__overlay_active");
    document.body.classList.remove("ylw_bg");
    anim_going = false;
  }, transition_time);

  setInfoText(slideIndex);

}

function setInfoText(slideIndex) {
  console.log("info: " + infoParagraph);
  infoParagraph.innerHTML = station_descriptions[slideIndex-1];
}
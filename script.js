const elektronButton = document.getElementById("play-elektron");
elektronButton.addEventListener("click", () => showGame("elektron", elektronButton));

const aliceButton = document.getElementById("play-alice");
aliceButton.addEventListener("click", () => showGame("alice", aliceButton));

const infoLink = document.getElementById("info-click");
infoLink.addEventListener("click", () => scrollToSection("intro"));

const projectsLink = document.getElementById("projects-click");
projectsLink.addEventListener("click", () => scrollToSection("projects"));

const artworkLink = document.getElementById("artwork-click");
artworkLink.addEventListener("click", () => scrollToSection("artwork"));

function showGame(id, button){
    const iframe1 = document.getElementById(id);

    if(iframe1.style.display === "unset"){
        iframe1.style.display = "none";
        button.innerText = "Zagraj teraz";
        return;
    }
    iframe1.style.display = "unset";
    button.innerText = "Ukryj grę";
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
}

let slideIndex = [1, 1, 1, 1];
let slideId = ["mySlides1", "mySlides2","mySlides5", "mySlides3"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);


// Next/previous controls
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
  setTimeout(() => {plusSlides(1, no);}, 5000);
}
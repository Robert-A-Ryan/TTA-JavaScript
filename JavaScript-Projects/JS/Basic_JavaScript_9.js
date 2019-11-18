//function countdown() {
//    var seconds = document.getElementById("seconds").Value;

//    function tick() {
//        seconds = seconds -1;
//        timer.innerHTML = seconds;
//        setTimeout(tick, 1000);
//    if(seconds == -1) {
//        alert("Time's Up!");
//        }   
//    }
//    tick();
//}

var slideIndex = 1;
showSlides(slideIndex);

//NEXT/PREVIOUS CONTROLS
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//THUMBNAIL IMAGE CONTROLS
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

//AUTOMATIC SLIDESHOW
//var slideIndex = 0;
//showSlides();

//function showSlides() {
//    var i;
//    var slides = document.getElementsByClassName("mySlides");
//    for (i = 0; i < slides.length; i++) {
//        slides[i].getElementsByClassName.display = "none";
//    }
//    slideIndex++;
//    if (slideIndex > slides.length) {slideIndex = 1}
//    slides[slideIndex-1].style.display = "block";
//    setTimeout(showSlides, 2000); //CHANGE IMAGE EVERY 2 SECONDS
//}

//MULTIPLE SLIDESHOWS
//var slideIndex=[1,1];
//CLASS THE MEMBERS OF EACH SLIDESHOW GROUP WITH DIFFERENT CSS CLASSES
//var slideId = ["mySlides1", "mySlides2"];
//showSlides(1,0);
//showSlides(1,1);

//function plusSlides (n, no) {
//    showSlides(slideIndex[no] += n, no);
//}

//function showSlides(n, no) {
//    var i;
//    var x = document.getElementsByClassName(slideId[no]);
//    if(n > x.length) {slideIndex[no] = 1}
//    if(n < 1) {slideIndex[no] = x.length}
//    for(i=0; i < x.length; i++) {x[i].style.display = "none";}
//    x[slideIndex[no]-1].style.display = "block";
//}
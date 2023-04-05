

var indexValue = 1;
showImg(indexValue);
function side_slide(e) {showImg((indexValue += e));}

function showImg(e) {
  var i;
  const img = document.querySelectorAll(".images");
  if (e > img.length) { indexValue = 1;}
  if (e < 1) {indexValue = img.length; }

  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }

  img[indexValue - 1].style.display = "block";
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("images");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 1000);
}

var owl = $('.news-slider');
owl.owlCarousel({
  stagePadding: 50,
    items:4,
    loop:true,
    margin:100,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
      0:{
          items:1
      },
      600:{
        items:2
      },
      1000:{
          items:3
      }
  }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// const mapSea = document.querySelectorAll(".mapSea");


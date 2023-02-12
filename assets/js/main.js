
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 10000,
        slidesToShow: 1,
    });
    $('.slider2').slick({
        

        draggable: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        fade: true,
        speed: 600,
        infinite: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100
    });
    $('.brandslider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 10000,
        slidesToShow: 1,
    });
    $('.brandslider1').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToScroll: 2,
        autoplaySpeed: 10000,
        slidesToShow: 2,
    });
    
    AOS.init();
   
    
});


const reply = document.getElementById("reply");
const replycontents = document.querySelectorAll(".replycontent");

reply.addEventListener("click", function () {
  for (let i = 0; i < replycontents.length; i++) {
    if (replycontents[i].style.display === "none") {
      replycontents[i].style.display = "block";
    } else {
      replycontents[i].style.display = "none";
    }
  }
});
const cancelreply = document.getElementById("cancelreply");

 cancelreply.addEventListener("click", function () {
  for (let i = 0; i < replycontents.length; i++) {
    if (replycontents[i].style.display === "none") {
      replycontents[i].style.display = "block";
  } else {
      replycontents[i].style.display = "none";
    }   }
});



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
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1
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
    AOS.init();
   
  

});
$(document).ready(function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

   

);
$(document).ready(function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

);
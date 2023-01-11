
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
        slidesToScroll: 1,
        autoplaySpeed: 2000
    });
    var lowerSlider = document.querySelector('#lower');
    var upperSlider = document.querySelector('#upper');

    document.querySelector('.two').value = upperSlider.value;
    document.querySelector('.one').value = lowerSlider.value;

    var lowerVal = parseInt(lowerSlider.value);
    var upperVal = parseInt(upperSlider.value);

    upperSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);

        if (upperVal < lowerVal + 4) {
            lowerSlider.value = upperVal - 4;
            if (lowerVal == lowerSlider.min) {
                upperSlider.value = 4;
            }
        }
        document.querySelector('.two').value = this.value
    };

    lowerSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);
        if (lowerVal > upperVal - 4) {
            upperSlider.value = lowerVal + 4;
            if (upperVal == upperSlider.max) {
                lowerSlider.value = parseInt(upperSlider.max) - 4;
            }
        }
        document.querySelector('#one').value = this.value
    };

});
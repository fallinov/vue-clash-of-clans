/*
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
*/

(function () {
  let slideContainer = $('.slide-container');

  slideContainer.slick();

  $('.clash-card__image img').hide();
  $('.slick-active').find('.clash-card img').fadeIn(200);

  // On before slide change
  slideContainer.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.slick-active').find('.clash-card img').fadeOut(1000);
  });

  // On after slide change
  slideContainer.on('afterChange', function (event, slick, currentSlide) {
    $('.slick-active').find('.clash-card img').fadeIn(200);
  });
})();

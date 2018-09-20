(function() {

  window.startSlides = function() {
    var s;
    $(".slides_container > p").each(function() {
      return $(this).replaceWith($(this).html());
    });
    $(".slides_container").each(function() {
      var h, w;
      w = $(this).width();
      h = $(this).height();
      if (!$(this).parent().hasClass('slides')) {
        return $(this).wrap("<div class='slides'/>").width(w).height(h);
      }
    });
    $(".slides_container > img").each(function() {
      return $(this).wrap("<div/>");
    });
    s = $('.slides');
    if (!s.hasClass('slidesStarted')) {
      $(".slides").slides({
        play: 5000,
        pause: 2500,
        generatePagination: false,
        effect: "fade",
        fadeEasing: "swing",
        crossfade: true
      });
      return s.addClass('slidesStarted');
    }
  };

  $(window.startSlides);

}).call(this);

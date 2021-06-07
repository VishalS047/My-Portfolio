document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    AOS.init();
  }
};


$(document).on('click', '.mobile-nav-toggle', function(e) {
  $('body').toggleClass('mobile-nav-active');
  $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
});

$(document).click(function(e) {
  var container = $(".mobile-nav-toggle");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    if ($('body').hasClass('mobile-nav-active')) {
      $('body').removeClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
    }
  }
});

// Skills section
$('.skills-content').waypoint(function() {
  $('.progress .progress-bar').each(function() {
    $(this).css("width", $(this).attr("aria-valuenow") + '%');
  });
}, {
  offset: '80%'
});

 // Back to top button
 $(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.totop').fadeIn('slow');
  } else {
    $('.totop').fadeOut('slow');
  }
});

$('.totop').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 1000, 'easeInOutExpo');
  return false;
});
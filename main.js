$(window).scroll(function() {
  if ($(this).scrollTop() > 400) {
    $('#left1').addClass("animated zoomIn");
  } else {
    $('#left1').removeClass("animated zoomIn");
  }
});


$(window).scroll(function() {
  if ($(this).scrollTop() > 700) {
    $('#left2').addClass("animated fadeInLeft");
  } else {
    $('#left2').removeClass("animated fadeInLeft");
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1000) {
    $('#left3').addClass("animated fadeInUp");
  } else {
    $('#left3').removeClass("animated fadeInUp");
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 400) {
    $('#right1').addClass("animated zoomIn");
  } else {
    $('#right1').removeClass("animated zoomIn");
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 700) {
    $('#right2').addClass("animated fadeInRight");
  } else {
    $('#right2').removeClass("animated fadeInRight");
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1000) {
    $('#right3').addClass("animated fadeInUp");
  } else {
    $('#right3').removeClass("animated fadeInUp");
  }
});


// PAGE 2 POUR LE ZOOM DES IMAGES //

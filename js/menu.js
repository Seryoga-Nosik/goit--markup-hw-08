$(document).ready(function () {
  $('.menu-button').click(function (event) {
    $('.menu-button-icon,.menu-container').toggleClass('menu-open');
    $('body').toggleClass('lock');
  });
});

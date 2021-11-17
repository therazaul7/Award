/*==== Mobile menu =====*/
$(".exdda-toggle-btn").click(function(){
   $("#exdda-side-menu").toggleClass("menu");
   $(".exdda-toggle-btn").toggleClass("menu-btn");
 });

/*===== Tab ====*/
$('#nav').children('li').first().children('a').addClass('active')
    .next().addClass('is-open').show();
    
$('#nav').on('click', 'li > a', function() {
    
  if (!$(this).hasClass('active')) {

    $('#nav .is-open').removeClass('is-open').hide();
    $(this).next().toggleClass('is-open').toggle();
      
    $('#nav').find('.active').removeClass('active');
    $(this).addClass('active');
  } else {
    $('#nav .is-open').removeClass('is-open').hide();
    $(this).removeClass('active');
  }
});

/*===== Acrodion icon ====*/
$(".rotate").click(function () {
    $(this).toggleClass("down");
})








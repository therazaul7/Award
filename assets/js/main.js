/*==== Mobile menu =====*/
$(".exdda-toggle-btn").click(function(){
   $("#exdda-side-menu").toggleClass("menu");
   $(".exdda-toggle-btn").toggleClass("menu-btn");
 });

/*===== Tab ====*/
$('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

/*===== Acrodion icon ====*/
$(".rotate").click(function () {
    $(this).toggleClass("down");
});

/*==== accrodion ====*/
(function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('.tab-list-content');

        $(this).closest('.accordion').find('.tab-list-content').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);




/*==== Mobile menu =====*/
$(".exdda-toggle-btn").click(function(){
   $(".exdda-left-sidebar").toggleClass("menu");
   $(".exdda-toggle-btn").toggleClass("menu-btn");
 });

/*===== Tab ====*/
$('.exdda-tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.exdda-tabs li').removeClass('current');
    $('.exdda-tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

/*===== Acrodion icon ====*/
$(".exdda-rotate").click(function () {
    $(this).toggleClass("exdda-down");
});

/*==== accrodion ====*/
(function($) {
    $('.exdda-accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.exdda-accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('.exdda-tab-list-content');

        $(this).closest('.exdda-accordion').find('.exdda-tab-list-content').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.exdda-accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);




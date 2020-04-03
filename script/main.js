$(document).ready(function(){
    $('.slide').bxSlider({
        mode:'fade',
        auto: true,
        pager: true,
        pause:10000,
        controls:false,
    })
    gnb();
    tab();
    h1_hover();
});
function gnb(){
    $("div#lnb_bg").hide();
    $("ul#menu li").hover(function(){
        $("#lnb_bg",this).stop().slideDown("fast");
    },function(){
        $("#lnb_bg",this).stop().slideUp("fast");
    });
}
function tab(){
    $(function() {
        $('ul#seller_title li').click(function() {
            var activeTab = $(this).attr('data-tab');
            $('ul#seller_title li').removeClass('current');
            $('.tabcontent').removeClass('current');
            $(this).addClass('current');
            $("#" + activeTab).addClass('current');
        })
    });
}
function h1_hover(){
    var h1=$(".seller_content > div > div > div > a > h1");
    $(".seller_content > div > div > div").hover(function(){
        h1.addClass("h1_hover");
    },function(){
        h1.removeClass("h1_hover");
    });
}
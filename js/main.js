$(function(){

    $('.toggle_btn').on('click',function(){
     if($('#header').hasClass('open')){
      $('#header').removeClass('open');  
     }else{
        $('#header').addClass('open');
     }
    });
 

    $('#mask').on('click',function(){
     $('#header').removeClass('open');
    });

/*-------------プラグイン---------------*/

$('.slick-area').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });

/*----------------------------*/

$(window).scroll(function(){
   $('.fadein').each(function(){
   let scroll = $(window).scrollTop();
   let target = $(this).offset().top;
   let windowHeight = $(window).height();

   if(scroll > target - windowHeight + 200){
    $(this).css('opacity','1');
    $(this).css('transform','translate(0)');
   }

   });   
});


});
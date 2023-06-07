
// menu toggle
$(document).ready(function(){
    $(".hamburger").click(function(){
      // $(this).toggleClass("is-active");
      $(".menu-items").toggleClass("open")
    });

  });

/* ------------ opt js start---------- */
document.addEventListener("DOMContentLoaded", function(event) {
    function OTPInput() {
    const inputs = document.querySelectorAll('#otp > *[id]');
    for (let i = 0; i < inputs.length; i++) 
    { inputs[i].addEventListener('keydown', function(event) 
        { if (event.key==="Backspace" ) 
            {  inputs[i].value='' ;
                 if (i !==0) inputs[i - 1].focus(); } 
                else { 
                    if (i===inputs.length - 1 && inputs[i].value !=='' ) 
                    { return true; }
                     else if (event.keyCode> 47 && event.keyCode < 58) 
                     { inputs[i].value=event.key; 
                        if (i !==inputs.length - 1) {inputs[i + 1].focus(); event.preventDefault(); }
                    } else if (event.keyCode> 64 && event.keyCode < 91) 
                    { inputs[i].value=String.fromCharCode(event.keyCode); 
                      if (i !==inputs.length - 1) {inputs[i + 1].focus(); event.preventDefault(); }} } }); } } 
                    OTPInput();});
  /* ------------ opt js end---------- */
  // boost health start
$(document).ready(function() {
  $("#health-boost-caro").owlCarousel({
  items : 2,
  itemsDesktop:[1024,1],
  itemsDesktopSmall:[980,1],
  itemsTablet:[768,1],
  itemsMobile : [700,1],
  pagination:true,
  navigation:false,
  dots: false,
  navigationText:["",""],
  autoPlay:true
  });
  });
// boost health end
  
// banner carousel
  $(document).ready(function(){
    $("#testimonial-slider,#nilavembu-sliders").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        slideSpeed:1000,
        autoPlay:true
    });
});

// products slider
$(document).ready(function() {
  $("#news-sliderss,#news-sliders,#selling-sliders,#selling-sliderss,#popular-sliders,#blog-sliders,#blog-sliderss,#blog-detail-sliders,#portfolio-sliders").owlCarousel({
  items : 4,
  itemsDesktop:[1199,3],
  itemsDesktopSmall:[980,2],
  itemsMobile : [700,1],
  pagination:true,
  navigation:true,
  dots: true,
  navigationText:["",""],
  autoPlay:false
  });
  });


// paranthaman

// eye-icon changing type password or text start
$(document).ready(function(){  
  $('.i-icon').click(function(){
      $(this).toggleClass("icon-active");
    if($(this).prev().attr('type')== 'password'){
        $(this).prev().attr('type','text');
      //   $(this).find('#pw-close').hide();
    } else{
      $(this).prev().attr('type','password'); 
  }        
 });
});
// eye-icon changing type password or text end

$(document).ready(function() {
  $("#blog-detail-banner").owlCarousel({
  items : 1,
  itemsDesktop:[1199,1],
  itemsDesktopSmall:[980,1],
  itemsMobile : [768,1],
  pagination:false,
  navigation:true,
  dots: true,
  navigationText:["",""],
  autoPlay:false
  });
  });


 

     // profile tabs show more animation
     $('.show-more-content-1').hide();

     $('.show-more-1').click(function(){
         $('.show-more-content-1').slideDown(500);
         $('.show-less-1').show();
         $('.show-more-1').hide();
     });

     $('.show-less-1').click(function(){
         $('.show-more-content-1').slideUp(500);
         $('.show-more-1').show();
         $(this).hide();
     });


     $('.show-more-content-2').hide();

     $('.show-more-2').click(function(){
         $('.show-more-content-2').slideDown(500);
         $('.show-less-2').show();
         $('.show-more-2').hide();
     });

     $('.show-less-2').click(function(){
         $('.show-more-content-2').slideUp(500);
         $('.show-more-2').show();
         $(this).hide();
     });


     $('.show-more-content-3').hide();

     $('.show-more-3').click(function(){
         $('.show-more-content-3').slideDown(500);
         $('.show-less-3').show();
         $('.show-more-3').hide();
     });

     $('.show-less-3').click(function(){
         $('.show-more-content-3').slideUp(500);
         $('.show-more-3').show();
         $(this).hide();
     });

     $('.show-more-content-4').hide();

     $('.show-more-4').click(function(){
         $('.show-more-content-4').slideDown(500);
         $('.show-less-4').show();
         $('.show-more-4').hide();
     });

     $('.show-less-4').click(function(){
         $('.show-more-content-4').slideUp(500);
         $('.show-more-4').show();
         $(this).hide();
     });

     $('.icon-thumbnail').click(function(){
      $(this).toggleClass("icon-active");
    
     })
     $('.categories-iterm p').click(function(){
      $(this).toggleClass("focus");
    
     })






   //  profile-popup-show

   $('.profile-total').click(function(){
    $(this).addClass("profile-show");
    $(".profile-background").addClass("show-profile-back");
    $("body").addClass("profile-overflow")
});
$(document).click(function(){
$('.profile-total').removeClass("profile-show");
$(".profile-background").removeClass("show-profile-back");
$("body").removeClass("profile-overflow")
$('.profile-total').click(function(e){
 e.stopPropagation();
});
})



$('.product-maga').click(function(){
  $(this).toggleClass("mege-product");
  
  })






//Get the button
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$(document).ready(function(){
  $(".current-order").click(function(){
    $(".cancel-orders").toggleClass("open")
  });
  $(document).click(function(){
    $('.cancel-orders').removeClass('open');
  });
  
  $(".current-order, .cancel-orders").click(function(e){
    e.stopPropagation();
  });

});

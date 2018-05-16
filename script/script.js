// /*preloader*/$(document).ready(function() {
//     setTimeout(function() {
//         var preloader = document.getElementsByClassName('preloader')[0];
//         if (!preloader.classList.contains("done")) {
//             preloader.classList.add("done");
//         }
//     }, 500);
// });
/*header_scroll*/$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});


/*yakir*/ $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
      ) {
      // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  /*nav menu*/$(document).ready(function(){
    $("#showHideContent").click(function () {
      if ($("#navmenu").is(":hidden")) {
        $("#navmenu").show("fast");
      } else {
        $("#navmenu").hide("fast");
      }
      return false;
    });
  });


  /*price maker*/ 
  var a = 0, b = 5, c = 5;
  updatePrice();
  $('.butt').click(function(){
    if(this.getAttribute('on-off') == 'on'){
      a-=this.getAttribute('price')-0;
      this.setAttribute('on-off','off')
    }
    else
      {a+=this.getAttribute('price')-0;
    this.setAttribute('on-off','on')
  }
  updatePrice();
})

  function updatePrice(){
   var price = parseInt(a) + parseInt(b) + parseInt(c);
   $('#pr').html(price +' ₴');
 }

 $("#but").click(function () {
  if ($("#sshow").is(":hidden")) {
    $("#sshow").toggle();
    $("#button").addClass("border");
  } else {
    $("#sshow").toggle();
    $("#button").removeClass("border");
  }
  return false;
});
 $("#but2").click(function () {
  if ($("#sshow2").is(":hidden")) {
    $("#sshow2").fadeIn("fast");
    $("#button2").addClass("border");
  } else {
    $("#sshow2").fadeOut("fast");
    $("#button2").removeClass("border");
  }
  return false;
});
 $("#but3").click(function () {
  if ($("#sshow3").is(":hidden")) {
    $("#sshow3").show("fast");
    $("#button3").addClass("border");
  } else {
    $("#sshow3").hide("fast");
    $("#button3").removeClass("border");
  }
  return false;
});


 $("#but11").click(function () {
  if ($("#sshow11").is(":hidden")) {
    $("#sshow11").fadeIn("fast");
    $("#button11").addClass("border");
  } else {
    $("#sshow11").fadeOut("fast");
    $("#button11").removeClass("border");
  }
  return false;
});
 $("#but4").click(function () {
  if ($("#sshow4").is(":hidden")) {
    $("#sshow4").fadeIn("fast");
    $("#button4").addClass("border");
  } else {
    $("#sshow4").fadeOut("fast");
    $("#button4").removeClass("border");
  }
  return false;
});
 $("#but5").click(function () {
  if ($("#sshow5").is(":hidden")) {
    $("#sshow5").fadeIn("fast");
    $("#button5").addClass("border");
  } else {
    $("#sshow5").fadeOut("fast");
    $("#button5").removeClass("border");
  }
  return false;
});
 $("#but6").click(function () {
  if ($("#sshow6").is(":hidden")) {
    $("#sshow6").fadeIn("fast");
    $("#button6").addClass("border");
  } else {
    $("#sshow6").fadeOut("fast");
    $("#button6").removeClass("border");
  }
  return false;
});
 $("#but7").click(function () {
  if ($("#sshow7").is(":hidden")) {
    $("#sshow7").fadeIn("fast");
    $("#button7").addClass("border");
  } else {
    $("#sshow7").fadeOut("fast");
    $("#button7").removeClass("border");
  }
  return false;
});
 $("#but8").click(function () {
  if ($("#sshow8").is(":hidden")) {
    $("#sshow8").fadeIn("fast");
    $("#button8").addClass("border");
  } else {
    $("#sshow8").fadeOut("fast");
    $("#button8").removeClass("border");
  }
  return false;
});
 $("#but9").click(function () {
  if ($("#sshow9").is(":hidden")) {
    $("#sshow9").fadeIn("fast");
    $("#button9").addClass("border");
  } else {
    $("#sshow9").fadeOut("fast");
    $("#button9").removeClass("border");
  }
  return false;
});
 $("#but10").click(function () {
  if ($("#sshow10").is(":hidden")) {
    $("#sshow10").fadeIn("fast");
    $("#button10").addClass("border");
  } else {
    $("#sshow10").fadeOut("fast");
    $("#button10").removeClass("border");
  }
  return false;
});
 $("#but12").click(function () {
  if ($("#sshow12").is(":hidden")) {
    $("#sshow12").fadeIn("fast");
    $("#button12").addClass("border");
  } else {
    $("#sshow12").fadeOut("fast");
    $("#button12").removeClass("border");
  }
  return false;
});

// $(document).ready(function(){
//     $("#button").click(function(){
//         $("#sshow").toggle();
//         $("#button").addClass("border");
//     });
// });
// $(document).ready(function(){
//     $("#button2").click(function(){
//         $("#sshow2").toggle();
//     });
// });
// $(document).ready(function(){
//     $("#button3").click(function(){
//         $("#sshow3").toggle();
//     });
// });;



$('input[name=chee]').click(function(){
	b=$(this).attr('price');
  updatePrice()
});
$('input[name=psize]').click(function(){
  c=$(this).attr('price');
  updatePrice()
});









$("#n25").click(function () {
  if ( $(".pizza-block>*").hasClass("low") ) {
  $(".pizza-block>*").removeClass("mid");
  $(".pizza-block>*").removeClass("bigger");
  }
  else{
    $(".pizza-block>*").addClass("low");
    $(".pizza-block>*").removeClass("mid");
  $(".pizza-block>*").removeClass("bigger");
  }
});
$("#n30").click(function () {
  if ( $(".pizza-block>*").hasClass("mid") ) {
  $(".pizza-block>*").removeClass("low");
  $(".pizza-block>*").removeClass("bigger");
  }
  else{
    $(".pizza-block>*").addClass("mid");
    $(".pizza-block>*").removeClass("low");
  $(".pizza-block>*").removeClass("bigger");
  }
});
$("#n35").click(function () {
  if ( $(".pizza-block>*").hasClass("bigger") ) {
  $(".pizza-block>*").removeClass("mid");
  $(".pizza-block>*").removeClass("low");
  }
  else{
    $(".pizza-block>*").addClass("bigger");
    $(".pizza-block>*").removeClass("mid");
  $(".pizza-block>*").removeClass("low");
  }
});


// /*preloader*/$(document).ready(function() {
//     setTimeout(function() {
//         var preloader = document.getElementsByClassName('preloader')[0];
//         if (!preloader.classList.contains("done")) {
//             preloader.classList.add("done");
//         }
//     }, 500);
// });
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


$(document).ready(function(){
    $("#button").click(function () {
        if ($("#sshow").is(":hidden")) {
            $("#sshow").toggle();
            $("#button").addClass("border");
        } else {
            $("#sshow").toggle();
            $("#button").removeClass("border");
        }
        return false;
    });
});
$(document).ready(function(){
    $("#button2").click(function () {
        if ($("#sshow2").is(":hidden")) {
            $("#sshow2").toggle();
            $("#button2").addClass("border");
        } else {
            $("#sshow2").toggle();
            $("#button2").removeClass("border");
        }
        return false;
    });
});
$(document).ready(function(){
    $("#button3").click(function () {
        if ($("#sshow3").is(":hidden")) {
            $("#sshow3").show("fast");
            $("#button3").addClass("border");
        } else {
            $("#sshow3").hide("fast");
            $("#button3").removeClass("border");
        }
        return false;
    });
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
// });
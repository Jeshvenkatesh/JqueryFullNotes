// $(document).ready(()=>{
//     $('button').click(()=>{
//         // $("p").hide(1000)  //  slow, fast, milliseconds
//         $('p').toggle('slow');
//     })
// });
// $(window).load(function(){
//     $('#div1').html('Height =' + $('#img1').height() + "<br/>" + "Width =" + $('#img1').width())
// });

  $(document).ready(function() {
    alert("Dom Loaded.");
  });
  $(window).on("load", function () {
    alert("Window Loaded.");
  }); 

  // hide current element
  $("button").click(function(){
    $(this).hide();
  });
  // select all elements
  $("button").click(function(){
    $("*").hide();
  });
  // Selects all <p> elements with class="intro"
  $("button").click(function(){
    $("p.intro").hide();
  });
  // Selects the first <p> element
  $("button").click(function(){
    $("p:first").hide();
  });
  // Selects the first <li> element of the first <ul>
  $("button").click(function(){
    $("ul li:first").hide();
  });
  // Selects all elements with an href attribute
  $("button").click(function(){
    $("[href]").hide();
  });
  // Selects all <a> elements with a target attribute value equal to "_blank"
  $("button").click(function(){
    $("a[target='_blank']").hide();
  });
  // 	Selects all <button> elements and <input> elements of type="button"
  $("button").click(function(){
    $(":button").hide();
  });

  // Events
  $("input").focus(function(){
    $(this).css("background-color", "#cccccc");
  });
  //The function is executed when the form field loses focus:
  $("input").blur(function(){
    $(this).css("background-color", "#ffffff");
  });
  //The on() method attaches one or more event handlers for the selected elements.
  $("p").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    },
    click: function(){
      $(this).css("background-color", "yellow");
    }
  });
  // Effects
  $("button").click(function(){
    $("p").hide(1000);
  });
  // You can also toggle between hiding and showing an element with the toggle() method.
  $("button").click(function(){
    $("p").toggle();
  });
  // jQuery has the following fade methods:
// fadeIn()
// fadeOut()
// fadeToggle()
// fadeTo()
$("button").click(function(){
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000);
});
$("button").click(function(){
  $("#div1").fadeTo("slow", 0.15);
  $("#div2").fadeTo("slow", 0.4);
  $("#div3").fadeTo("slow", 0.7);
});
// jQuery has the following slide methods:
// slideDown()
// slideUp()
// slideToggle()
$("#flip").click(function(){
  $("#panel").slideToggle();
})
// animate
$("button").click(function(){
  $("div").animate({
    left: '250px',
    height: '+=150px',
    width: '+=150px'
  });
}); 
// by default, the stop() method kills the current animation being performed on the selected element.
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
})
// A callback function is executed after the current effect is finished.
$("button").click(function(){
  $("p").hide("slow", function(){
    alert("The paragraph is now hidden");
  });
});
// Chaining allows us to run multiple jQuery methods (on the same element) within a single statement.
$("#p1").css("color", "red").slideUp(2000).slideDown(2000);

//  Jquery HTML

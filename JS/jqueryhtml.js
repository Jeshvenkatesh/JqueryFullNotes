// Jquery HTML

//===> GET and SET
// text() - Sets or returns the text content of selected elements;
// html() - Sets or returns the content of selected elements (including HTML markup)
// val() - Sets or returns the value of form fields
$("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
  });
  $("#btn1").click(function(){
    alert("Value: " + $("#test").val());
  });
  
  // The jQuery attr() method is used to get attribute values.
  $("button").click(function(){
    alert($("#w3s").attr("href"));
  });
  $("button").click(function(){
    $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
  });
  $("button").click(function(){
    $("#w3s").attr({
      "href" : "https://www.w3schools.com/jquery/",
      "title" : "W3Schools jQuery Tutorial"
    });
  });
  $("button").click(function(){
    $("#w3s").attr("href", function(i, origValue){
      return origValue + "/jquery/";
    });
  });
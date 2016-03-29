// var empObject = {};

$(function(){
  var empObject = {};
  $("#empForm").on('submit', function(event){
    event.preventDefault();
    empObject.firstName = $("#firstName").val();
    empObject.lastName = $("#lastName").val();
    empObject.empNumber = $("#empNumber").val();
    empObject.title = $("#title").val();
    empObject.reviewScore = parseInt($("#reviewScore").val());
    empObject.salary = $("#salary").val();


    $("ul").append("<li>Employee: " + empObject.firstName + " " + empObject.lastName + "</li>");
    $("ul li").last().append("<p>Employee #: " + empObject.empNumber + " Title: " + empObject.title + " Score: " + empObject.reviewScore + " Salary: $" + empObject.salary + "</p>");
    $("ul li").last().append("<button>Remove Employee</button>");

    $("button").on('click', function(){
      $(this).parent().remove();
    });

    console.log(typeof empObject.reviewScore);
    switch (empObject.reviewScore) {
      case 1:
      $("ul li").last().css("background-color", "red");
      break;
      case 2:
      $("ul li").last().css("background-color", "orange");
      break;
      case 3:
      $("ul li").last().css("background-color", "yellow");
      break;
      case 4:
      $("ul li").last().css("background-color", "blue");
      break;
      case 5:
      $("ul li").last().css("background-color", "green");
      break;

      default:

    }


  });



});


// switch (empObject.reviewScore) {
//   case 1:
//   $("li").css("background-color", "red");
//   break;
//   default:
//
// }

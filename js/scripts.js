$(document).ready(function() {
 $('form#favform').submit(function(event) {

  const q1 = $("input#question1").val();  
  const q2 = $("input#question2").val();
  const q3 = $("input#question3").val();
  const favArray = [q1, q2, q3];
  let newArray = [];

  newArray.push(favArray[0]);
  newArray.push(favArray[1]);
  newArray.push(favArray[2]);

//  //const newArray = favArray[0, 1, 2]
//  favArray.push(0, 1, 2);
// console.log(favArray);

  newArray.forEach(function(element){
    $("#output").append("<li>" + element + "</li>");
  });

  event.preventDefault();
 });
});




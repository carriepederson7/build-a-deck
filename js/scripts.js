$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var deck = [];
    var cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
    cards.forEach(function(card) {
      card + "ofHearts";
      // console.log(ofHearts);
    });
  });
});

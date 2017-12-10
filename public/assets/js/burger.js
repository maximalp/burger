// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".button.is-danger.submit").on("click", function(event) {
    var id = $(this).data("id");
    //var devouredState = true;
    console.log("button click " + id);
    alert("button click " + id);
    var newBurgerState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("Changed burder to: ", newBurgerState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $("#newBurger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    console.log("clicked submit");
    event.preventDefault();
    console.log("clicked submit");
    var newBurger = {
      name: $("#newBurgerName").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger " + newBurger.name);
        location.reload();
        console.log("page reloaded");
        // Reload the page to get the updated list

      }
    );

  });












});

<script>
    // Function to update today's date
    function updateTodaysDate() {
      // Array of month names
      var monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];

      // Get today's date
      var today = new Date();
      var day = today.getDate(); // Get day of the month
      var monthIndex = today.getMonth(); // Get month index (0-11)

      // Display today's date in text format
      document.getElementById("todaysDate").innerText = day + " " + monthNames[monthIndex];
    }

    // Call the function when the page loads
    window.onload = function() {
      updateTodaysDate();
    };
  </script>
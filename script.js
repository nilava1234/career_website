document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function () {
    var iframe = document.getElementById("website_frame");
    iframe.src = "child_pages/WIP.html"
    fetch('data/website_lib.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON data
      })
      .then(data => {
        const locationData = data[this.textContent]; // Access the data using the button's textContent

        if (!locationData || locationData.length === 0) return; // Early return if no data available

        iframe.src = locationData[0].src; // Update the iframe's src with the "src" field in JSON

      })
      .catch(error => {
        console.error('Error fetching the JSON file:', error);
      });
  });
});
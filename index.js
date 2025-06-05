fetch('data/bio.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('page').innerHTML = data;
  })
  .catch(error => {
    document.getElementById('page').textContent = 'Failed to load bio.html.';
    console.error('Error loading bio.html:', error);
  });

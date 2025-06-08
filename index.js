fetch('data/bio.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('page').innerHTML = data;
  })
  .catch(error => {
    document.getElementById('page').textContent = 'Failed to load bio.html.';
    console.error('Error loading bio.html:', error);
  });


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tab_button').forEach(button => {
    button.addEventListener('click', () => {
      const fileName = button.dataset.file;  // same as button.getAttribute('data-file')
      console.log('Clicked:', button.textContent, '-> Loading:', fileName);

      fetch('data/' + fileName)
        .then(response => response.text())
        .then(data => {
          document.getElementById('page').innerHTML = data;
        })
        .catch(error => {
          document.getElementById('page').textContent = `Failed to load ${fileName}.`;
          console.error(`Error loading ${fileName}:`, error);
        });
    });
  });
});

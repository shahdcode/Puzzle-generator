const defaultImageItem = document.getElementById('defaultImage');
    const loadImageItem = document.getElementById('loadImage');
    const puzzleImage = document.getElementById('puzzleImage');

    // Default image source
    const defaultImageSrc = 'img/default-image.webp';

    // Handle "default image" click
    defaultImageItem.addEventListener('click', () => {
      puzzleImage.src = defaultImageSrc; // Reset to default image
    });

    // Handle "load image" click
    loadImageItem.addEventListener('click', () => {
      // Create a file input element dynamically
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*'; // Allow only image files

      // Handle file selection
      fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0]; // Get the uploaded file
        if (file) {
          const reader = new FileReader(); // Create a FileReader to read the file
          reader.onload = (e) => {
            puzzleImage.src = e.target.result; // Set the image source to the uploaded file
          };
          reader.readAsDataURL(file); // Read the file as a data URL
        }
      });

      // Trigger the file input dialog
      fileInput.click();
    });

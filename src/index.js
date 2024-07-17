//console.log('%c HI', 'color: firebrick')
//fetch and display images
document.addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const dogImageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          dogImageContainer.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching images:', error));
  });

  //fetch and display dog breeds
  document.addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

 // Fetch and display images (same as Challenge 1)
  fetch(imgUrl)
  .then(response => response.json())
  .then(data => {
    const dogImageContainer = document.getElementById('dog-image-container');
    data.message.forEach(imageUrl => {
      const img = document.createElement('img');
      img.src = imageUrl;
      dogImageContainer.appendChild(img);
    });
  })
  .catch(error => console.error('Error fetching images:', error));

// Fetch and display dog breeds
fetch(breedUrl)
  .then(response => response.json())
  .then(data => {
    const dogBreedsList = document.getElementById('dog-breeds');
    const breeds = Object.keys(data.message);
    breeds.forEach(breed => {
      const li = document.createElement('li');
      li.textContent = breed;
      dogBreedsList.appendChild(li);
    });
  })
  .catch(error => console.error('Error fetching breeds:', error));
});

//change font color on breed selection and filter breeds
document.addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    // Fetch and display images (same as Challenge 1)
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const dogImageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          dogImageContainer.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching images:', error));
  
    // Fetch and display dog breeds
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const dogBreedsList = document.getElementById('dog-breeds');
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          dogBreedsList.appendChild(li);
  
    // Change font color on click
          li.addEventListener('click', function() {
            li.style.color = 'red'; // Example color change
          });
        });
  
    // Filter breeds by dropdown selection
        const breedDropdown = document.getElementById('breed-dropdown');
        breedDropdown.addEventListener('change', function() {
          const letter = breedDropdown.value;
          breeds.forEach(breed => {
            const li = dogBreedsList.querySelector(`li:contains("^${letter}")`);
            if (breed.startsWith(letter, a, d)) {
              li.style.display = 'block';
            } else {
              li.style.display = 'none';
            }
          });
        });
      })
      .catch(error => console.error('Error fetching breeds:', error));
  });
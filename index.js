

var jsonData = [
    {
        "image": "https://a0.muscache.com/im/pictures/miso/Hosting-695266101459546026/original/242615ba-990f-4578-9a20-4faa7a0eaad3.jpeg?im_w=720",
        "title": "Harabang India ",
        "bookmark": 4.76,
        "description": "239 kilometers away   Dec 2021",
        "price": 29.99
    },

    
    {
        "image": "https://a0.muscache.com/im/pictures/miso/Hosting-837315422629442025/original/dd6e35a7-eeaa-4144-8c66-b05936ba1c77.jpeg?im_w=720",
        "title": "Neali Megla india ",
        "bookmark": 5.0,
        "description": "334 kilometers away   Dec 2021.",
        "price": 70.99
    },
    {
        "image": "https://a0.muscache.com/im/pictures/miso/Hosting-979405696641155415/original/133c6348-b6a3-4f8a-830f-a685532559b2.png?im_w=720",
        "title": "Delwalal india ",
        "bookmark": 4.30,
        "description": "158 kilometers away   Dec 2021.",
        "price": 40.99
    },
    {
        "image": "https://a0.muscache.com/im/pictures/7dce5ec5-20b9-44fe-848b-7709177c34eb.jpg?im_w=720",
        "title": "Halani India ",
        "bookmark": 4.50,
        "description": " 276 kilometers away   Dec 2021.",
        "price": 70.00
    },

    
    {
        "image": "https://a0.muscache.com/im/pictures/miso/Hosting-979405696641155415/original/133c6348-b6a3-4f8a-830f-a685532559b2.png?im_w=720",
        "title": "Delwalal india ",
        "bookmark": 4.30,
        "description": "158 kilometers away   Dec 2021.",
        "price": 40.99
    },

    
];



;



const apiUrl = 'https://api.publicapis.org/entries';
const dataContainer = document.getElementById('data-container');
const fetchButton = document.getElementById('fetchButton');

const fetchData = () => {
  // Make a GET request using the apiUrl variable
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Clear previous data
      dataContainer.innerHTML = '';

      // Check if the response is an object with an 'entries' property
      if (Array.isArray(data.entries)) {
        // Iterate over the array of items
        data.entries.forEach(item => {
          const productCard = document.createElement('div');
          productCard.className = 'product-card1';

          const listItem = document.createElement('div'); // Use a more semantic element like 'div'
          listItem.innerHTML = `
            <p>API: ${item.API}</p>
            <p>Description: ${item.Description}</p>
            <p>Category: ${item.Category}</p>
          `;

          productCard.appendChild(listItem);
          dataContainer.appendChild(productCard);
        });
      } else {
        // If the response is not in the expected format, display a message or handle it accordingly
        const errorItem = document.createElement('p');
        errorItem.textContent = 'Invalid response format or missing entries';
        dataContainer.appendChild(errorItem);
        console.error('Invalid response format:', data);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

// Event listener for the button click
fetchButton.addEventListener('click', fetchData);



// Function to fetch data from the API
// Step 3: Manipulate the DOM dynamically
var productContainer = document.getElementById('productContainer');

// Loop through the JSON data and create a card for each product
jsonData.forEach(function(product) {
    var productCard = document.createElement('div');
    productCard.className = 'product-card';

    // Create HTML content for the product card
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <span class="price">Price: ${product.price}</span> <br>
        <span class="bookmark">Bookmark: ${product.bookmark}</span>
    `;

    // Append the product card to the container
    productContainer.appendChild(productCard);
});





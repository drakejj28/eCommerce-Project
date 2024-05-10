// JavaScript file
const products = [
    { "image": src="images/PS5cover.JPG", "name": "DESCENT INTO DUSK", "price": "$69.99", "description": "Descent into Dusk is a chilling survival horror odyssey set in the haunting swamplands of Texas, teetering on the edge of global calamity. Assume the role of Jarvis, a man ensnared in a web of darkness and deceit as he searches for a loved one lost to the sinister whispers of an evil cult. Navigate a world where the supernatural bleeds into reality, and every step through the murky waters could be your last. Uncover the truth, piece together the enigmatic Shards of Dusk, and survive the horrors that lurk beneath the surface. Will you emerge from the shadows, or will the descent claim you?" },
    { "name": "JARVIS FUNKO POP! FIGURE", "price": "$30.00", "description": "Immerse yourself in the pre-apocalyptic tension with the exclusive Jarvis Funko Pop! From the swamplands of Texas to the brink of world war, this figure captures the essence of survival horror. With meticulous detail mirroring Jarvis’s rugged appearance, this collectible is a must-have for fans of “Descent into Dusk.”" },
    { "name": "DESCENT INTO DUSK: ORIGINAL SOUNDTRACK VINYL", "price": "$25.00", "description": "Echo the haunting melodies of the swamplands with the Descent into Dusk: Original Soundtrack Vinyl. This collector’s edition vinyl brings the eerie and atmospheric tunes of Jarvis’s journey to life, perfect for any fan of the game’s chilling narrative. Spin the record and let the dark symphony of survival horror envelop you." },
    { "name": "JARVIS 'DESCENT INTO DUSK' T-SHIRT", "price": "$19.99", "description": " Embrace the mystery of the swamplands with the official Jarvis T-Shirt from “Descent into Dusk.” Crafted for fans, this shirt features the iconic silhouette of Jarvis against a backdrop of encroaching darkness, symbolizing his perilous quest. A must-have for any enthusiast of the game’s deep narrative and eerie setting." },
    { "name": "DESCENT INTO DUSK INSULATED COFFEE MUG", "price": "$24.99", "description": "Steep yourself in the eerie atmosphere of “Descent into Dusk” with this rugged, insulated coffee mug. Featuring the embossed emblem of the game’s protagonist, Jarvis, this mug is perfect for keeping your beverages hot while you unravel the mysteries of the swamplands. A durable companion for any adventure, real or virtual." },
    { "name": "DESCENT INTO DUSK: THE OFFICAL STRATEGY GUIDE", "price": "$29.99", "description": "Delve deeper into the murky depths of “Descent into Dusk” with the official strategy guide. This comprehensive book is filled with maps, strategies, and secrets to help players on their quest to find Jarvis’s missing loved one. It’s the ultimate companion for any fan looking to conquer the swamplands and unravel the cult’s mysteries." },
    { "name": "DESCENT INTO DUSK", "price": "$69.99", "description": "A great product." },
    { "name": "DESCENT INTO DUSK", "price": "$69.99", "description": "A great product." },
    { "name": "DESCENT INTO DUSK", "price": "$69.99", "description": "A great product." },
    { "name": "DESCENT INTO DUSK", "price": "$69.99", "description": "A great product." },
    { "name": "DESCENT INTO DUSK", "price": "$69.99", "description": "A great product." },
    { "name": "DESCENT INTO DUSK", "price": "$69.99", "description": "A great product." },
  ];
  
  // Function to create product HTML
  function createProductHTML(product) {
    return `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <p>${product.description}</p>
      </div>
    `;
  }
  
  // Insert products into the page
  const productsContainer = document.getElementById('products');
  products.forEach(product => {
    productsContainer.innerHTML += createProductHTML(product);
  });

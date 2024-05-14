// products for games page
const products = [
    { "image": src="images/game.png", "name": "DESCENT INTO DUSK", "price": "$69.99", "description": "Descent into Dusk is a chilling survival horror odyssey set in the haunting swamplands of Texas, teetering on the edge of global calamity. Assume the role of Jarvis, a man ensnared in a web of darkness and deceit as he searches for a loved one lost to the sinister whispers of an evil cult. Navigate a world where the supernatural bleeds into reality, and every step through the murky waters could be your last. Uncover the truth, piece together the enigmatic Shards of Dusk, and survive the horrors that lurk beneath the surface. Will you emerge from the shadows, or will the descent claim you?" },
    { "image": src="images/funkopop.JPG","name": "JARVIS FUNKO POP! FIGURE", "price": "$30.00", "description": "Immerse yourself in the pre-apocalyptic tension with the exclusive Jarvis Funko Pop! From the swamplands of Texas to the brink of world war, this figure captures the essence of survival horror. With meticulous detail mirroring Jarvis’s rugged appearance, this collectible is a must-have for fans of “Descent into Dusk.”" },
    { "image": src="images/vinyl.png", "name": "DESCENT INTO DUSK: ORIGINAL SOUNDTRACK VINYL", "price": "$25.00", "description": "Echo the haunting melodies of the swamplands with the Descent into Dusk: Original Soundtrack Vinyl. This collector’s edition vinyl brings the eerie and atmospheric tunes of Jarvis’s journey to life, perfect for any fan of the game’s chilling narrative. Spin the record and let the dark symphony of survival horror envelop you." },
    { "image": src="images/tshirt.png", "name": "DESCENT INTO DUSK T-SHIRT", "price": "$19.99", "description": " Embrace the mystery of the swamplands with the official T-Shirt from “Descent into Dusk.” Crafted for fans, this shirt is a must-have for any enthusiast of the game’s deep narrative and eerie setting." },
    { "image": src="images/tumbler.png", "name": "DESCENT INTO DUSK INSULATED COFFEE TUMBLER", "price": "$24.99", "description": "Steep yourself in the eerie atmosphere of “Descent into Dusk” with this rugged, insulated coffee tumbler. This mug is perfect for keeping your beverages hot while you unravel the mysteries of the swamplands. A durable companion for any adventure, real or virtual." },
    { "image": src="images/guide.png", "name": "DESCENT INTO DUSK: THE OFFICAL STRATEGY GUIDE", "price": "$29.99", "description": "Delve deeper into the murky depths of “Descent into Dusk” with the official strategy guide. This comprehensive book is filled with maps, strategies, and secrets to help players on their quest to find Jarvis’s missing loved one. It’s the ultimate companion for any fan looking to conquer the swamplands and unravel the cult’s mysteries." },
    { "name": "DESCENT INTO DUSK", "price": "$69.99", "description": "A great product." },
    { "name": "DESCENT INTO DUSK", "price": "$69.99", "description": "A great product." },
    { "name": "DESCENT INTO DUSK", "price": "$69.99", "description": "A great product." },
    { "name": "DESCENT INTO DUSK", "price": "$69.99", "description": "A great product." },
    { "name": "DESCENT INTO DUSK", "price": "$69.99", "description": "A great product." },
    { "name": "DESCENT INTO DUSK", "price": "$69.99", "description": "A great product." },
  ];
  
  // function to create product HTML
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
  
  // inserts products into the page
  const productsContainer = document.getElementById('products');
  products.forEach(product => {
    productsContainer.innerHTML += createProductHTML(product);
  });

  // This function will be called when the user clicks the button
function displayAlert() {
    // First, we get the value entered by the user in the 'name' input field
    const name = document.getElementById('name').value;
    // Then, we get the value entered by the user in the 'email' input field
    const email = document.getElementById('email').value;
    // Lastly, we get the value entered by the user in the 'message' textarea
    const message = document.getElementById('message').value;
  
    // Now, we check if the 'name' field is empty
    if (name === '') {
      // If it is, we show an alert telling the user to enter their name
      alert('Please enter your name.');
      // And we stop the function here, so the alert with the form data won't show
      return;
    }
  
    // Next, we check if the 'email' field is empty
    if (email === '') {
      // If it is, we show an alert telling the user to enter their email
      alert('Please enter your email.');
      // And we stop the function here as well, for the same reason
      return;
    }
  
    // If both 'name' and 'email' are not empty, we create a message
    const alertMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    // And then we show an alert with the message that includes the user's data
    alert(alertMessage);
  }
// products for games page
// this is an array of objects, where each object represents a product
const products = [

    // each product is an object with properties: image, name, price, and description
    { "image": src="images/game.png", "name": "DESCENT INTO DUSK", "price": "$69.99", "description": "Descent into Dusk is a survival horror video game set in the eerie swamplands of Texas, just as the world teeters on the edge of a catastrophic war. Players step into the shoes of Jarvis, whose world is turned upside down when a loved one vanishes, lured into the depths of an ominous cult. As night falls, the swamps become shadows and whispers, where reality warps and dangers lurk in every murky corner. The game combines the terror of the unknown with the desperation of a personal quest. With each step deeper into the dusk, players must navigate through treacherous terrain, unravel the cult’s dark secrets, and survive encounters with both human and supernatural foes. The haunting atmosphere challenges players to use their wits, stealth, and scarce resources to stay alive while piecing together clues that could lead to their loved one. The game promises a harrowing journey through darkness, both literal and metaphorical, as players confront the true meaning of survival in a world gone mad." },
    { "image": src="images/funkopop.JPG","name": "JARVIS FUNKO POP! FIGURE", "price": "$30.00", "description": "Immerse yourself in the pre-apocalyptic tension with the exclusive Jarvis Funko Pop! From the swamplands of Texas to the brink of world war, this figure captures the essence of survival horror. With meticulous detail mirroring Jarvis’s rugged appearance, this collectible is a must-have for fans of “Descent into Dusk.”" },
    { "image": src="images/vinyl.png", "name": "DESCENT INTO DUSK: ORIGINAL SOUNDTRACK VINYL", "price": "$25.00", "description": "Echo the haunting melodies of the swamplands with the Descent into Dusk: Original Soundtrack Vinyl. This collector’s edition vinyl brings the eerie and atmospheric tunes of Jarvis’s journey to life, perfect for any fan of the game’s chilling narrative. Spin the record and let the dark symphony of survival horror envelop you." },
    { "image": src="images/tshirt.png", "name": "DESCENT INTO DUSK T-SHIRT", "price": "$19.99", "description": " Embrace the mystery of the swamplands with the official T-Shirt from “Descent into Dusk.” Crafted for fans, this shirt is a must-have for any enthusiast of the game’s deep narrative and eerie setting." },
    { "image": src="images/tumbler.png", "name": "DESCENT INTO DUSK INSULATED COFFEE TUMBLER", "price": "$24.99", "description": "Steep yourself in the eerie atmosphere of “Descent into Dusk” with this rugged, insulated coffee tumbler. This mug is perfect for keeping your beverages hot while you unravel the mysteries of the swamplands. A durable companion for any adventure, real or virtual." },
    { "image": src="images/guide.png", "name": "DESCENT INTO DUSK: THE OFFICAL STRATEGY GUIDE", "price": "$29.99", "description": "Delve deeper into the murky depths of “Descent into Dusk” with the official strategy guide. This comprehensive book is filled with maps, strategies, and secrets to help players on their quest to find Jarvis’s missing loved one. It’s the ultimate companion for any fan looking to conquer the swamplands and unravel the cult’s mysteries." },
    { "image": src="images/hat.png", "name": "TWILIGHT'S EDGE CAP", "price": "$29.99", "description": "Dive into the shadows with the “Twilight’s Edge Cap,” a sleek accessory for gamers who love to explore the mysteries of dusk. This stylish 5-panel hat, adorned with the enigmatic phrase “Descent into Dusk,” is the perfect companion for late-night gaming sessions or urban adventures. Crafted with premium materials, it offers both comfort and a statement piece that resonates with the thrill of discovery in your favorite games. Embrace the night and make a bold statement with this exclusive cap." },
    { "image": src="images/lantern.png", "name": "JARVIS' LANTERN REPLICA", "price": "$34.99", "description": "The Replica of Jarvis’ Lantern is a meticulously crafted prop that captures the essence of the game “Descent into Dusk.” It features a vintage design with a sturdy metal frame and glass panels, encasing a battery-operated light that emits a soft, ambient glow. The lantern’s handle allows for easy carrying or hanging, making it a versatile addition to any gaming space. Its weathered appearance and attention to detail make it not only a functional light source but also a collector’s item that embodies the spirit of survival and mystery central to the game." },
    { "image": src="images/amulet.png", "name": "AMULET NECKLACE: THE ENIGMA OF DUSK", "price": "$12.99", "description": "Unveil the mystery of “Descent into Dusk” with this exquisite Cultist Amulet Necklace. Crafted to embody the enigmatic power of the game’s pivotal artifact, this necklace serves as a talisman for those who dare to explore the unknown. The amulet’s intricate design features ancient symbols and a weathered finish, giving it an aura of ancient wisdom and forbidden knowledge. This necklace is not only a captivating piece of game memorabilia but also a subtle emblem of your adventurous spirit. Wear it and carry the essence of the game wherever you go." },
    { "image": src="images/escape.png", "name": "ESCAPE ROOM EXPERIENCE KIT", "price": "$99.99", "description": "The ‘Escape the Cult’ Escape Room Experience Kit, inspired by the gripping survival horror video game ‘Descent into Dusk,’ offers a heart-racing adventure. This at-home kit immerses players in the eerie swamplands of Texas, echoing the game’s setting as the world hovers on the brink of war. As participants assume the role of Jarvis, they must navigate a series of cryptic puzzles and utilize thematic props to uncover the fate of a vanished loved one and confront the shadowy cult behind the disappearance. This kit is not just a game; it’s a narrative-driven experience that demands teamwork, courage, and strategy, providing an unforgettable group activity that’s as thrilling as it is mysterious. Are you prepared to descend into the dusk and escape the cult?" },
    { "image": src="images/chain.png", "name": "DESCENT INTO DUSK KEYCHAIN", "price": "$6.99", "description": "The keychain captures the essence of the game with its minimalist design and the enigmatic title etched in a haunting font, a memento for fans and a symbol of the descent into the unknown. This keychain serves as a tangible link to the game’s dark and immersive world, a perfect collectible for any fan." },
    { "image": src="images/dance.JPG", "name": "MOONLIT REVERIE POSTER", "price": "$29.99", "description": "Step into the eerie swamplands of Texas with our captivating “Moonlit Reverie” poster inspired by the survival horror video game, Descent into Dusk. Witness the haunting allure of the cult’s moonlit dance—a siren call that lures you deeper into their web. Shadows stretch across the murky waters, secrets fester, and the line between reality and nightmare blurs. Our poster captures this spine-tingling essence, inviting you to unravel chilling mysteries." },
  ];
  
// this function creates HTML for a product and it takes a product object as a parameter
  function createProductHTML(product) {

    // this function returns a string of HTML
    // the HTML represents a product, with an image, name, price, and description
    // the product's properties are inserted into the HTML using template literals (the ${} syntax).
    return `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <p>${product.description}</p>
      </div>
    `;
  }
  
 // this line of code is getting a reference to an HTML element with the id products
 // the HTML element will be used as a container to insert the products into
  const productsContainer = document.getElementById('products');

// the forEach method is being called on the products array
// for each product in the products array, a function is being executed.
  products.forEach(product => {
        // The += operator is used to append to the existing innerHTML.
    // the createProductHTML function is called with the current product as an argument
    // the HTML is then appended to the innerHTML of the productsContainer
    // the product is inserted into the page inside the productsContainer
    productsContainer.innerHTML += createProductHTML(product);
  });

  // this function will be called when the user clicks the button
function displayAlert() {
    // first, we get the value entered by the user in the name input field
    const name = document.getElementById('name').value;
    // then, we get the value entered by the user in the email input field
    const email = document.getElementById('email').value;
    // lastly, we get the value entered by the user in the message text area
    const message = document.getElementById('message').value;
  
    // checks if the 'name' field is empty
    if (name === '') {
      // If it is, we show an alert telling the user to enter their name
      alert('Please enter your name.');
      // And we stop the function here, so the alert with the form data won't show
      return;
    }
  
    // checks if the 'email' field is empty
    if (email === '') {
      // if it is, we show an alert telling the user to enter their email
      alert('Please enter your email.');
      // we stop the function here as well, for the same reason
      return;
    }

       // checks if the 'message' field is empty
       if (email === '') {
        // if it is, we show an alert telling the user to enter a message
        alert('Error: no message submitied. Please try again!');
        // we stop the function here as well, for the same reason
        return;
      }
  
    // if both 'name' and 'email' are not empty, we create a message
    const alertMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // shows an alert with the message that includes the user's data
    alert(alertMessage);
  }
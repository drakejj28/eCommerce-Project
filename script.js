// request to the JSON file
fetch('games.json') 
    // fetch returns a response object. .json() method to parse the response body text as JSON
    .then(response => response.json())
    // parsed JSON data is then passed to the next .then() 
    .then(data => {
        // reference to the products div in HTML
        let productsDiv = document.getElementById('products');
        // loops through each item
        data.forEach(item => {
            // create a new div for this item
            let productDiv = document.createElement('div');
            // add the product class to the new div
            productDiv.className = 'product';
            // set the inner HTML of our new div using a template string
            productDiv.innerHTML = `
                <h2>${item.name}</h2>
                <img src="${item.image}" alt="${item.name}">
                <p>Price: ${item.price}</p>
                <p>${item.description}</p>
            `;
            // append our new product div to the products div in our HTML
            productsDiv.appendChild(productDiv);
        });
    })
    // if there is an error at any point in the fetch or processing .catch() will handle it
    .catch(error => console.error('Error:', error));

  // contact form 
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
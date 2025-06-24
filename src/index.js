function displayMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    // console.log(message);
}
fetch("https://dummyjson.com/products")
    
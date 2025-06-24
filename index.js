function displayMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    // console.log(message);
}
fetch("http://localhost:3000/posts")
    .then(response => response.json())
    .then(data => {
        if (data && data.length > 0) {
            displayMessage(`Fetched ${data.length} posts successfully.`);
        } else {
            displayMessage("No posts found.");
        }
    })
    .catch(error => {
        console.error("Error fetching posts:", error);
        displayMessage("Failed to fetch posts.");
    }); 
// Ensure the DOM is fully loaded before running the script
// Function to launch and open a game in the iframe popup
function playGame(gameName, gameUrl) {
    const modal = document.getElementById("gameModal");
    const gameFrame = document.getElementById("gameFrame");
    const gameTitle = document.getElementById("modalGameTitle");

    // Change title and load game URL into the iframe
    gameTitle.innerText = "Playing: " + gameName;
    gameFrame.src = gameUrl;

    // Show the popup on screen
    modal.style.display = "flex";
}

// Function to stop the game and close the popup
function closeGame() {
    const modal = document.getElementById("gameModal");
    const gameFrame = document.getElementById("gameFrame");

    // Hide the popup and clear iframe source so the audio stops playing
    modal.style.display = "none";
    gameFrame.src = "";
}

// Close modal if user clicks outside of the game box area
window.onclick = function(event) {
    const modal = document.getElementById("gameModal");
    if (event.target == modal) {
        closeGame();
    }
}
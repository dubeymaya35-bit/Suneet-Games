// Game Player Modal Controller
function playGame(gameName, gameUrl) {
    const modal = document.getElementById('gameModal');
    const modalTitle = document.getElementById('modalGameTitle');
    const gameFrame = document.getElementById('gameFrame');
    
    // 1. Set the game title in the popup header
    modalTitle.innerText = gameName;
    
    // 2. Put the real mobile game link into the viewing frame
    gameFrame.src = gameUrl;
    
    // 3. Show the pop-up window on screen
    modal.style.display = 'block';
}

function closeGame() {
    const modal = document.getElementById('gameModal');
    const gameFrame = document.getElementById('gameFrame');
    
    // Clear the link source so the game audio stops playing immediately
    gameFrame.src = ''; 
    modal.style.display = 'none';
}

// Close the game popup automatically if the player clicks outside the game box
window.onclick = function(event) {
    const modal = document.getElementById('gameModal');
    if (event.target == modal) {
        closeGame();
    }
}

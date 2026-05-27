// Universal Game Player Controller (Like Poki)
function playGame(gameName, gameUrl) {
    const modal = document.getElementById('gameModal');
    const modalTitle = document.getElementById('modalGameTitle');
    const gameFrame = document.getElementById('gameFrame');
    
    // Set the title of the popup box to the game you clicked
    modalTitle.innerText = gameName;
    
    // Inject the real game URL directly into the viewing window frame
    gameFrame.src = gameUrl;
    
    // Reveal the popup window onto the screen
    modal.style.display = 'block';
}

function closeGame() {
    const modal = document.getElementById('gameModal');
    const gameFrame = document.getElementById('gameFrame');
    
    // Clear the source so the game music stops playing when closed
    gameFrame.src = ''; 
    modal.style.display = 'none';
}

// Close the modal player if the user clicks anywhere outside of the game box
window.onclick = function(event) {
    const modal = document.getElementById('gameModal');
    if (event.target == modal) {
        closeGame();
    }
}

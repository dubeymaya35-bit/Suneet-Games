function playGame(gameName, gameUrl) {
    const modal = document.getElementById('gameModal');
    const modalTitle = document.getElementById('modalGameTitle');
    const gameFrame = document.getElementById('gameFrame');
    
    modalTitle.innerText = gameName;
    gameFrame.src = gameUrl; // This streams the game safely
    modal.style.display = 'block';
}

function closeGame() {
    const modal = document.getElementById('gameModal');
    const gameFrame = document.getElementById('gameFrame');
    gameFrame.src = ''; // Stops the game audio immediately when closed
    modal.style.display = 'none';
}

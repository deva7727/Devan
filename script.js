// Script to dynamically add top players to the leaderboard
const leaderboard = [
    { name: "PlayerOne", score: 1500 },
    { name: "CreeperMaster", score: 1300 },
    { name: "BlockDestroyer", score: 1200 },
    { name: "MineCrafter", score: 1100 },
    { name: "BuilderDude", score: 1000 }
];

const leaderboardElement = document.getElementById('player-leaderboard');

function loadLeaderboard() {
    leaderboard.forEach(player => {
        const playerItem = document.createElement('li');
        playerItem.textContent = `${player.name} - Score: ${player.score}`;
        leaderboardElement.appendChild(playerItem);
    });
}

// Load leaderboard when the page is ready
document.addEventListener('DOMContentLoaded', loadLeaderboard);

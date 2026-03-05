// Example with a few entries from your games.json
const games = [
    {
      "name": "Retro Bowl",
      "game_url": "https://hfmanor.com/retro-bowl",
      "game_image_icon": "https://hfmanor.com/image/retro-bowl"
    },
    {
      "name": "Subway Surfers",
      "game_url": "https://hfmanor.com/subway-surfers",
      "game_image_icon": "https://hfmanor.com/image/subway-surfers"
    },
    {
      "name": "Basketball Stars",
      "game_url": "https://hfmanor.com/basketball-stars",
      "game_image_icon": "https://hfmanor.com/image/basketball-stars"
    }
];

const container = document.getElementById('game-container');

games.forEach(game => {
    const card = document.createElement('a');
    card.href = game.game_url; // Uses the 'game_url' key from your JSON
    card.className = 'game-card';
    
    // Uses 'game_image_icon' and 'name' keys from your JSON
    card.innerHTML = `
        <img src="${game.game_image_icon}" alt="${game.name}">
        <p>${game.name}</p>
    `;
    
    container.appendChild(card);
});

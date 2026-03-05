// This data is merged directly from your games.json file
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
    },
    {
      "name": "Snow Rider 3D",
      "game_url": "https://games.mathpapers.org/snowrider3d/index.html",
      "game_image_icon": "https://hfmanor.com/image/Snow Rider 3D"
    }
    // ... add all other entries from your list here
];

const container = document.getElementById('game-container');

games.forEach(game => {
    const card = document.createElement('a');
    card.href = game.game_url;
    card.className = 'game-card';
    
    card.innerHTML = `
        <img src="${game.game_image_icon}" alt="${game.name}">
        <p>${game.name}</p>
    `;
    
    container.appendChild(card);
});

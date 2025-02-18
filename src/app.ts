import express from 'express';
import { load, loadSettings } from './json-loader';

const gameData = load();
if (gameData.error) {
    console.error(gameData.message);
    process.exit(1);
}

const settings = loadSettings();
if (settings.title) {
    console.log(settings.title);
}
console.log(gameData.message);
const app = express();

app.get('/', (req, res) => {
    const result = searchGames(req.query.search as string, settings.minSearchLength);
    res.status(200).send(result);
    return;
  });
  
app.listen(settings.port, () => {
  console.log(`Server is running on port ${settings.port}`);
});

const searchGames = (query: string, minSearchLength: number) => {
    if (!query || query.length === 0) {
        return { message: 'No search specified', games: [] };
    }
    if (query.length < minSearchLength) {
        return { message: `${query} Too short, specify at least ${minSearchLength} characters`, games: [] };
    }
    const matchingGames = gameData.games.filter((game) => {
        return game.toLowerCase().includes(query.toLowerCase());
    });
    if (matchingGames.length === 0) {
        return { message: `${query} No results found`, games: [] };
    }
    return { message: `'${query}' (${matchingGames.length})`, games: matchingGames };
}
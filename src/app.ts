import express from 'express';
import { GameData, load, loadSettings, Settings } from './json-loader';
import { searchGames } from './search';

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
    const result = searchGames(req.query.search as string, settings, gameData);
    res.status(200).send(result);
    return;
  });
  
app.listen(settings.port, () => {
  console.log(`Server is running on port ${settings.port}`);
});

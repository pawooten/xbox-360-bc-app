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

app.use(express.static('public'));

app.get('/search', (req, res) => {
    const result = searchGames(req.query.q as string, settings, gameData);
    res.status(200).send(result);
    return;
  });
  
app.listen(settings.port, () => {
  console.log(`Server is running on port ${settings.port}`);
});

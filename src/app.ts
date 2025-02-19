import express from 'express';
import { load, loadSettings } from './json-loader';
import { searchGames } from './search';
import { Directories as DirectoryNames, LogMessages, QueryParameters, RoutePaths } from './constants';

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

app.use(express.static(DirectoryNames.Public));

app.get(RoutePaths.Search, (req, res) => {
    const result = searchGames(req.query[QueryParameters.Query] as string, settings, gameData);
    res.status(200).send(result);
    return;
  });
  
app.listen(settings.port, () => {
  console.log(LogMessages.ServerIsRunning(settings.port));
});

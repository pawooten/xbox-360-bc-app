import express from 'express';
import data from '../data.json';
const title = 'XBOX 360 BC App';
console.log(title);

 console.log(`${data.games.length} games found in data.json`);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const search = req.query.search;
    if (search) {
        const results = searchGames(search as string);
        if (results.games.length === 0) {
            res.status(200).send(results.message);
            return;
        }
        res.status(200).send(`${results.message} ${results.games.join(', ')}`);
        return;
    }
    res.status(200).send(title);
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const searchGames = (query: string) => {
    const matchingGames = data.games.filter((game) => {
        return game.toLowerCase().includes(query.toLowerCase());
    });
    if (matchingGames.length === 0) {
        return { message: `''${query}'' No results found`, games: [] };
    }
    return { message: `'${query}' (${matchingGames.length})`, games: matchingGames };
}
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
        if (results.length === 0) {
            res.status(200).send(`'${search}' No results found`);
            return;
        }
        res.status(200).send(`'${search}' (${results.length}) ${results.join(', ')}`);
        return;
    }
    res.status(200).send(title);
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const searchGames = (query: string) => {
    const results = data.games.filter((game) => {
        return game.toLowerCase().includes(query.toLowerCase());
    });
    return results;
}
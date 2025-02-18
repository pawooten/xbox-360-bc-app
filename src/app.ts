import express from 'express';
import { load } from './json-loader';

const title = 'XBOX 360 BC App';
console.log(title);

const data = load();
if (data.error) {
    console.error(data.message);
    process.exit(1);
}
console.log(data.message);
const app = express();
const port = 3000;
const minSearchLength = 3;

app.get('/', (req, res) => {
    const result = searchGames(req.query.search as string);
    res.status(200).send(result);
    return;
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const searchGames = (query: string) => {
    if (!query || query.length === 0) {
        return { message: 'No search specified', games: [] };
    }
    if (query.length < minSearchLength) {
        return { message: `${query} Too short, specify at least ${minSearchLength} characters`, games: [] };
    }
    const matchingGames = data.games.filter((game) => {
        return game.toLowerCase().includes(query.toLowerCase());
    });
    if (matchingGames.length === 0) {
        return { message: `${query} No results found`, games: [] };
    }
    return { message: `'${query}' (${matchingGames.length})`, games: matchingGames };
}
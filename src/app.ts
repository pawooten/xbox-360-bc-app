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
        res.status(200).send(`${title} search '${search}'`);
        return;
    }
    res.status(200).send(title);
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

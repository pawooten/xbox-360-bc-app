import express from 'express';

const title = 'XBOX 360 BC App';
console.log(title);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send(title);
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


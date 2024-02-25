
import express from "express";
import cors from "cors";

import indexRouter from './controllers/indexRouter.js';

import pokemonsController from './controllers/pokemonRouter.js';

const app = express();

app.use(express.json());
app.use(cors());


app.use('/', express.static('./FRONT/dist'));


app.use('/api', indexRouter);

app.use('/api/pokemon', pokemonsController);


const port = 80
app.listen(port, () => console.log(`App listening on port ${port}!`))

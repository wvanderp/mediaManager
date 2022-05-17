import express from 'express';
import cors from 'cors';

import upload from './upload/upload';

const app = express();


app.use(cors());

const port = process.env.PORT || 8000;

app.use('/upload', upload);


app.listen(port);

// eslint-disable-next-line no-console
console.log(`Magic happens on: http://localhost:${port}`);

import express from 'express';
import multer from 'multer';
import fs from 'fs';

import { MongoClient } from 'mongodb';

import Storage from 'photoLib-storage-local';
import config from '../../config';

const router = express.Router();
const upload = multer({dest: 'uploads/'});


router.post('/', upload.single('file'), async (request, response) => {
    const uploadFile = JSON.parse(request.body.uploadFile);
    const file = fs.readFileSync(request.file.path);

    const storage = new Storage({});

    console.log(uploadFile);
    storage.saveSync(uploadFile.hash, file);

    // ---------------------------
    // into the db

    const client = await MongoClient.connect(config.dbUrl);
    const photosDB = client.db('photos');
    const photosCollection = photosDB.collection('photos');

    await photosCollection.insertOne(uploadFile);

    response.send('');
});

export default router;

import express from 'express';
import multer from 'multer';
import fs from 'fs';

import { MongoClient } from 'mongodb';

import Storage from 'mediamanager-storage-local';
import config from '../../config';

const router = express.Router();
const upload = multer({dest: 'uploads/'});


router.post('/', upload.single('file'), async (request, response) => {
    const uploadFile = JSON.parse(request.body.uploadFile);

    if(request.file === undefined || request.file.path === undefined) {
        response.status(400).json({
            message: 'No file uploaded'
        });
        return;
    }

    const file = fs.readFileSync(request.file.path);

    const storage = new Storage({
        path: config.storage.path
    });

    console.log(uploadFile);
    storage.storeSync(uploadFile.hash, file);

    // ---------------------------
    // into the db

    const client = await MongoClient.connect(config.database.dbUrl);
    const photosDB = client.db('photos');
    const photosCollection = photosDB.collection('photos');

    await photosCollection.insertOne(uploadFile);

    response.send('');
});

export default router;

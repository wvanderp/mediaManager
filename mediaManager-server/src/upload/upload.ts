import express from 'express';
import multer from 'multer';
import fs from 'fs';

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

    const fileHash = config.storage.storeBySha(file)
    const uploadFileHash = config.storage.storeBySha(JSON.stringify(uploadFile))

    console.log(fileHash, uploadFileHash);

    response.send(uploadFileHash);
});

export default router;

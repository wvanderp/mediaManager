import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';
import FormData from 'form-data';
import  UploadEntry  from '../../../mediaManager-types/UploadFile';


const server = 'localhost:8000';

const upload = async (uploadFile) => {
    const toUpload: UploadEntry[] = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), `./${uploadFile}`)).toString());

    // eslint-disable-next-line no-restricted-syntax
    for await (const job of toUpload) {
        const data = new FormData();
        data.append('file', fs.createReadStream(`${job.filePath}\\${job.fileName}`));
        data.append('uploadFile', JSON.stringify(job));

        const result = await axios.post(`http://${server}/upload`, data);

        // todo: check results
    }
};

export default upload;

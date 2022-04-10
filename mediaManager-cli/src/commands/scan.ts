import fs from 'fs';
import path from 'path';

import * as R from 'ramda';

import isImage from 'is-image';
import isVideo from 'is-video';

import sha1 from 'sha1';
import { UploadEntry } from '../../../photolib-types/src/UploadFile';


const writeUploadFile = (data): void => {
    console.log(data);
    const location = path.resolve(process.cwd(), './uploadFile.json');
    fs.writeFileSync(location, JSON.stringify(data));
};

const scanDirectory = (directory: string): UploadEntry[] => {
    const location = path.resolve(__dirname, directory);
    const files = fs.readdirSync(location);
    const fileList = R.map((r) => `${directory}\\${r}`, R.filter((r) => isImage(r) || isVideo(r), files));

    // todo: read modified time from filesystem
    return R.map((r) => {
        const fileStats = fs.statSync(r);
        return {
            fileName: path.basename(r),
            filePath: path.dirname(r),
            hash: sha1(fs.readFileSync(r)),
            creationTime: fileStats.birthtime.toISOString(),
            lastModificationTime: fileStats.mtime.toISOString(),
            size: fileStats.size
        };
    }, fileList);
};

const scan = (directory: string): void => {
    writeUploadFile(scanDirectory(path.resolve(process.cwd(), directory)));
};

export default scan;

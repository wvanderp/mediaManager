import fs from 'fs';
import path from 'path';

import isImage from 'is-image';
import isVideo from 'is-video';

import sha1 from 'sha1';
import UploadEntry  from '../../../mediaManager-types/UploadFile';


function writeUploadFile  (data): void {
    const location = path.resolve(process.cwd(), './uploadFile.json');
    fs.writeFileSync(location, JSON.stringify(data, null, 4));
};

export function scanDirectory (directory: string): UploadEntry[]  {
    const location = path.resolve(__dirname, directory);
    const files = fs.readdirSync(location);
    const fileList = files
    .filter((r) => isImage(r) || isVideo(r))
    .map(
        (r) => `${directory}\\${r}`
    );

    // TODO: read modified time from filesystem
    return fileList.map((r) => {
        const fileStats = fs.statSync(r);
        return {
            fileName: path.basename(r),
            filePath: path.dirname(r),
            hash: sha1(fs.readFileSync(r)),
            creationTime: fileStats.birthtime.toISOString(),
            lastModificationTime: fileStats.mtime.toISOString(),
            size: fileStats.size
        };
    });
};

export default function scan (directory: string): void {
    writeUploadFile(scanDirectory(path.resolve(process.cwd(), directory)));
};


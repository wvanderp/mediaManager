import {createHash} from 'crypto'

import path from 'path';
import fs from 'fs/promises';
interface LocalStorageOptions{
    path: string;
}

function isObject(obj: any): obj is Object {
    return obj === Object(obj);
}

type AcceptedStorageTypes = Buffer | string


export default class Storage {
    path: string

    constructor(options: LocalStorageOptions) {
        this.path = options.path;
    }

    /**
     * 
     * @param id - id of the file
     * @param file - file to be stored
     */
    async store(id: string, file: AcceptedStorageTypes): Promise<void> {
        const first = id.slice(0, 2);
        const second = id.slice(0, 4);

        const folder = path.join(this.path, first, second);

        await fs.mkdir(folder, { recursive: true });
        await fs.writeFile(path.join(folder, id), file)
    }

    /**
     * 
     * @param id - id of the file
     * @param file - file to be stored
     */
    storeSync(id: string, file: AcceptedStorageTypes): void {
        throw new Error("Method not implemented.");
    }

    /** 
     * stores a file under its sha256 hash
     * @param file - file to be stored
     * @returns sha256 hash of the file
     */
    storeBySha(file: AcceptedStorageTypes): string {
        if(isObject(file)) {
            file = file.toString();
        }

        const shaHash =  createHash('sha256').update(file).digest('hex');

        this.store(shaHash, file);

        return shaHash;
    }

    /**
     * 
     * @param id - id of the file
     */
    retrieve(id: string): Buffer {
        throw new Error("Method not implemented.");
    }

    /**
     * 
     * @param id - id of the file
     */
    retrieveSync(id: string): Buffer {
        throw new Error("Method not implemented.");
    }
}
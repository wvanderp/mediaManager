interface LocalStorageOptions{
    path: string;
}


export default class Storage {
    path: string

    constructor(options: LocalStorageOptions) {
        this.path = options.path;
    }

    store(id: string, file: Buffer): void {
        throw new Error("Method not implemented.");
    }

    storeSync(id: string, file: Buffer): void {
        throw new Error("Method not implemented.");
    }

    retrieve(id: string): string {
        throw new Error("Method not implemented.");
    }
}
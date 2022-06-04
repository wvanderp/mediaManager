import Storage from "mediamanager-storage-local";

export default {
    port: process.env.PORT || 3000,
    storage: new Storage({
        path: "./uploads"
    })
};

import path from "path";
const databaseSettings = {
    dbUser: 'dbUser',
    dbPassword: 'PtqzIdMLGa6GU9nd',
    dbName: 'photoLib',
};


export default {

    database: {
        ...databaseSettings,
        dbUrl: `mongodb+srv://${databaseSettings.dbUser}:${databaseSettings.dbPassword}@cluster0-rjzxl.azure.mongodb.net/${databaseSettings.dbName}?retryWrites=true&w=majority`,    
    },


    storage: {
        path: path.join(__dirname, 'uploads/')
    }
};

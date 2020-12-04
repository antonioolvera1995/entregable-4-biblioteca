import { myKey } from "./key";



class Db {
    
    dbName = 'library';
    dbLocal = `mongodb://localhost/${this.dbName}`;
    dbAtlas = `mongodb+srv://antonioOlvera:${myKey}@cluster0.uw3yy.mongodb.net/${this.dbName}?retryWrites=true&w=majority`;
    dbDeprecated = { useNewUrlParser: true, useUnifiedTopology: true };

}

export const db = new Db();
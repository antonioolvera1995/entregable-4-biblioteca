import express from 'express';
import cors from 'cors';
import { booksRoutes } from './routes/books.routes';
import { authorsRoutes } from './routes/authors.routes';
const app = express();

app.use(cors());
app.use(express.json());
app.set('port', 3000);

app.use("/books", booksRoutes.router);
app.use("/authors", authorsRoutes.router);


app.listen(app.get('port'),()=>{

console.log(`servidor levantado en http://localhost:${app.get('port')}`);

});
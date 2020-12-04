#Proyecto creado en Node utilizando Mongodb y Mongoose.

Debe reemplazar el contenido de la variable "dbAtlas" ubicado en databases.ts por su enlace de conexion en MongodbAtlas.
También debera crear en su base de datos una nueva colección llamada "library" y 2 documentos llamados "authors" y "books".

#Rutas de libros

http://localhost:3000/books            // get
http://localhost:3000/books/all        // get
http://localhost:3000/books/:id        // get
http://localhost:3000/books            // post
http://localhost:3000/books/:id        // delete
http://localhost:3000/books/:id        // put

#JSON para los libro
Para post
```
{
    "idAuthor": "gs65d465ds4",
    "title": "El señor 2",
    "description": "Lugar Mordor",
    "isbn": "4rfgb9er"
}
```
Para put
```
{
    
    "title": "El señor actualizao",
    "description": "Mordor actualizado",
    "isbn": "4rfgb9er isbn actualizado 2"
}
```


#Rutas de autores

http://localhost:3000/authors          // get
http://localhost:3000/authors/:id      // get
http://localhost:3000/authors          // post
http://localhost:3000/authors/:id      // put
http://localhost:3000/authors/:id      // delete

#JSON para los autores

Para post y put
```
{
    "name": "Antonio",
    "familyName": "Olvera",
    "age": "25",
}

import { Router } from "express";
import { booksController } from "../controllers/books.controllers";

class BooksRoutes {

    router: Router = Router();

    constructor() {

        this.router.get("/", booksController.getAll);
        this.router.get("/all", booksController.getAll2);
        this.router.get("/:id", booksController.getOne);
        this.router.post("/", booksController.setOne);
        this.router.delete("/:id", booksController.delOne);
        this.router.put("/:id", booksController.updateOne);

    }
}

export const booksRoutes = new BooksRoutes();
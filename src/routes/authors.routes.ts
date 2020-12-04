import { Router } from "express";
import { authorsController } from "../controllers/authors.controllers";

class AuthorsRoutes {

    router: Router = Router();

    constructor() {

        this.router.get("/", authorsController.getAll);
        this.router.get("/:id", authorsController.getOne);
        this.router.post("/", authorsController.setOne);
        this.router.delete("/:id", authorsController.delOne);
        this.router.put("/:id", authorsController.updateOne);

    }
}

export const authorsRoutes = new AuthorsRoutes();
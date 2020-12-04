import { Request, Response } from "express";
import mongoose from 'mongoose';
import { author } from "../models/authors.model";
import { db } from "../databases";

class AuthorsController {
    constructor() { }

    async getAll(req: Request, res: Response) {

        try {

            await mongoose.connect(db.dbAtlas, db.dbDeprecated);
            const authorslist = await author.find();

            res.send(authorslist);

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

    }

    async getOne(req: Request, res: Response) {

        try {

            const id: string = req.params.id;
            await mongoose.connect(db.dbAtlas, db.dbDeprecated);
            const authorslist = await author.find({ _id: id });

            res.send(authorslist);

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

    }


    async setOne(req: Request, res: Response) {

        try {

            const body = req.body;
            await mongoose.connect(db.dbAtlas, db.dbDeprecated);
            const newbook = new author(body);
            await newbook.save();

            res.send(`${body.name} ${body.familyName} añadido correctamente.`)

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

    }


    async delOne(req: Request, res: Response) {

        try {


            const id: string = req.params.id;
            await mongoose.connect(db.dbAtlas, db.dbDeprecated);
            await author.deleteOne({ _id: id });
            res.send('Autor borrado correctamente');

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

    }


    async updateOne(req: Request, res: Response) {

        try {
            const body = req.body;
            const id: string = req.params.id;

            await mongoose.connect(db.dbAtlas, db.dbDeprecated);
            if (!body.name || !body.familyName || !body.age) {
                res.send('Porfavor ningun campo puede estar vacio o introduce el id correcto');
            } else {
                await author.updateOne({ _id: id }, { name: body.name, familyName: body.familyName, age: body.age });
                res.send('Autor actualizado correctamente');
            }



        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

    }



}

export const authorsController = new AuthorsController();
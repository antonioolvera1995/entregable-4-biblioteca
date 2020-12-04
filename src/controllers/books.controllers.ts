import { Request, Response } from "express";
import mongoose from 'mongoose';
import { book } from "../models/books.model";
import { db } from "./../databases";

class BooksController {
    constructor() { }

    async getAll(req: Request, res: Response) {

        try {

            await mongoose.connect(db.dbAtlas, db.dbDeprecated);
            const bookslist = await book.find();

            res.send(bookslist);

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

    }

    async getAll2(req: Request, res: Response) {

        try {

            await mongoose.connect(db.dbAtlas, db.dbDeprecated);
            const bookslist = await book.find().populate("idAuthor");

            res.send(bookslist);

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

    }

    async getOne(req: Request, res: Response) {

        try {

            const id: string = req.params.id;
            await mongoose.connect(db.dbAtlas, db.dbDeprecated);
            const bookslist = await book.find({ _id: id });

            res.send(bookslist);

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

    }


    async setOne(req: Request, res: Response) {

        try {

            const body = req.body;
            await mongoose.connect(db.dbAtlas, db.dbDeprecated);
            const newbook = new book(body);
            await newbook.save();

            res.send(`${body.title} añadido correctamente.`)

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

    }


    async delOne(req: Request, res: Response) {

        try {


            const id: string = req.params.id;
            await mongoose.connect(db.dbAtlas, db.dbDeprecated);
            await book.deleteOne({ _id: id });
            res.send('Libro borrado correctamente');

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
            if (!body.title || !body.description || !body.isbn) {
                res.send('Porfavor ningun campo puede estar vacio  o introduce el id correcto');
            } else {
                await book.updateOne({ _id: id }, { title: body.title, description: body.description, isbn: body.isbn });
                res.send('Libro actualizado correctamente');
            }



        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

    }



}

export const booksController = new BooksController();
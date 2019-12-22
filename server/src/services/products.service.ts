import { Request, Response } from 'express';
import { MongooseDocument } from 'mongoose';

// import models
import { Product } from '../models/products.models';

export class Products {
    public productsList(req: Request, res: Response) {
        return res.status(200).json("products");
    }

    public getAllProducts(req: Request, res: Response) {
        Product.find({}, (err: Error, product: MongooseDocument) => {
            if(err) {
                res.send(err)
            }
            res.json(product)
        })
    }
}
import { Request, Response } from 'express';

export class Welcome {
    public welcomeMessage(req: Request, res: Response) {
        return res.status(200).send("Welcome Ecommerce");
    }
}
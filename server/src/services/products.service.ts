import { Request, Response } from 'express';

const products = [
    {   image: 'https://www.jing.fm/clipimg/detail/51-510429_svg-transparent-stock-nike-air-force-orange-tnis.png',
        product: 'Tenis',
        store: 200
    },
    {
        image: 'https://havainas.vteximg.com.br/arquivos/ids/161615-583-439/4000029_0001_C.jpg?v=6358450107391700000',
        product: 'Sandalias',
        store: 300
    },
    {
        image: 'https://carcararockstore.com.br/wp-content/uploads/2019/05/camiseta-branca-sem-fundo.png',
        product: 'camisetas',
        store: 400
    }
]

export class Products {
    public productsList(req: Request, res: Response) {
        return res.status(200).json(products);
    }
}
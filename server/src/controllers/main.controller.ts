import { Application } from 'express';
import { Welcome } from '../services/welcome.service';
import { Products } from '../services/products.service';

export class Controller {
    private welcome: Welcome;
    private product: Products;

    constructor(private app: Application) {
        this.welcome = new Welcome();
        this.product = new Products(); 
        this.routes();
    }

    public routes() {
        this.app.route('/').get(this.welcome.welcomeMessage);
        this.app.route('/products').get(this.product.productsList);
        this.app.route('/productsall').get(this.product.getAllProducts);
    }
}
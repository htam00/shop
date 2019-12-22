import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Import Controllers
import { Controller } from './src/controllers/main.controller';

class App {

	public app: Application;
	
	// Declare Controller;
	public controller: Controller;

	constructor(){
		this.app = express();
		this.setConfig();
		this.controller = new Controller(this.app);
	}

	private setConfig() {
		this.app.use(bodyParser.json({ limit: '50mb'}));

		this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: false}));

		this.app.use(cors());
	}

	
}

export default new App().app;
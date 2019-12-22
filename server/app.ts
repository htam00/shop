import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// Import Controllers
import { Controller } from './src/controllers/main.controller';

// Import Configs
import { MONGO_URL } from './config/db';

class App {

	public app: Application;
	
	// Declare Controller;
	public controller: Controller;

	constructor(){
		this.app = express();
		this.setConfig();
		this.setMongoConfig();
		this.controller = new Controller(this.app);
	}

	private setConfig() {
		this.app.use(bodyParser.json({ limit: '50mb'}));

		this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: false}));

		this.app.use(cors());
	}

	// Connected MongoDB
	private setMongoConfig() {
		mongoose.Promise = global.Promise;

		mongoose.connect(MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}, () => console.log('[MONGODB] Connected...'));
	}

}

export default new App().app;
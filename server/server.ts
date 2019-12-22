import app from './app';
import * as dotenv from 'dotenv';

// config ENV
dotenv.config();

const PORT = process.env.PORT || 2233

app.listen(PORT, () => console.log(`Listenning on port localhost:${PORT}`));


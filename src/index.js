import dotenv from 'dotenv'
dotenv.config();

import Express from 'express';

const app = new Express();

app.listen(process.env.PORT || 3000, () => {
	console.log('SERVER STATUS [OK]')
});
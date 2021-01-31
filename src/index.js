import dotenv from 'dotenv'
import Express from 'express';
import userRouter from './routes/user.routes';
import contactRouter from './routes/contact.routes';

dotenv.config();

const app = new Express();

app.use(Express.json());
app.use(Express.urlencoded());


app.use('/api/user', userRouter);
app.use('/api/contact', contactRouter)

app.listen(process.env.PORT || 3000, () => {
	console.log('SERVER STATUS [OK]')
});

module.exports = app;
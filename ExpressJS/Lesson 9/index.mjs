import express from 'express';
import { documents } from './documents';
import { subjects } from './subjects';
const port = process.env.PORT || 3000;

const app = express();

app.use('/documents', documents);
app.use('/subjects', subjects);

app.listen(port, () => {
    console.log('Server API was started!');
});

export { app };
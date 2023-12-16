import {  createHandler, createApp } from '@try-zod/core';
import { router as userRouter } from '@try-zod/users';


const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = createApp([userRouter]);

app.use([userRouter]);

app.get('/', createHandler({
    handler: async (req, res) => {
        res.send({ message: 'Hello API' });
    }
}));


app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
});

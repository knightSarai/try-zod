import * as z from 'zod';
import express, { ErrorRequestHandler } from 'express';
import { createHandler } from '@try-zod/core';
import { router as userRouter } from '@try-zod/users';



const zodErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof z.ZodError) {
    const formattedErrors = err.errors.map(error => `${error.path.join('.')}: ${error.message}`);
    return res.status(400).json({
      errors: formattedErrors,
    });
  }

  next(err);
};

const defaultErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({message: 'Internal Server Error'});
};

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.use(express.json());
app.use(userRouter);


app.get('/', createHandler({
    handler: (req, res) => {
      res.send({ message: 'Hello API' });
    }
}));


app.use(zodErrorHandler);
app.use(defaultErrorHandler);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

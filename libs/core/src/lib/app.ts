import express from 'express';
import { zodErrorHandler, defaultErrorHandler } from './middlewares';

export function createApp(routers: express.Router[]): express.Express {
    const app = express();

    app.use(express.json());
    app.use(routers);
    app.use(zodErrorHandler);
    app.use(defaultErrorHandler);

    return app;
}


import * as z from 'zod';
import { ErrorRequestHandler } from 'express';
import { ValidationError } from '../errors';


export const zodErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof z.ZodError) {
        const formattedErrors = err.errors.map(error => `${error.path.join('.')}: ${error.message}`);
        return res.status(400).json({
            errors: formattedErrors,
        });
    }

    if (err instanceof ValidationError) {
        return res.status(400).json({
            errors: [err.message],
        });
    }

    next(err);
};


export const defaultErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({message: 'Internal Server Error'});
};

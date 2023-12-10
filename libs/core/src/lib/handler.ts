import * as z from 'zod';
import {NextFunction, Request, Response, RequestHandler } from 'express';

declare module 'express-serve-static-core' {
    interface Request {
        schema?: any;
    }
}

interface RequestWithSchema<T = any> extends Request {
    schema: T;
}

export type HandlerConfig<T extends z.ZodType<any, any>> = {
    schema?: T;
    handler: (req: RequestWithSchema<z.infer<T>>, res: Response, next: NextFunction) => Promise<void>;
}

const defaultSchema = z.object({});

export function createHandler<T extends z.ZodType<any, any> = typeof defaultSchema>(
    config: HandlerConfig<T>
): RequestHandler {
    const { schema = defaultSchema, handler } = config;
    return async (req, res, next) => {
        req.schema = schema.parse(req.body);
        try {
            await handler(req as RequestWithSchema<z.infer<T>>, res, next);
        } catch (error) {
            next(error);
        }
    };
}

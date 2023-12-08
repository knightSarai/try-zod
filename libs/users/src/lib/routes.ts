import express from 'express';
import { createHandler } from '@try-zod/core';
import { userSchema } from './schemas';


export const router = express.Router();


router.post('/user', createHandler({
  schema: userSchema,
  handler: (req, res) => {
    const { name, age } = req.schema;
    res.send({name, age});
  }
}));


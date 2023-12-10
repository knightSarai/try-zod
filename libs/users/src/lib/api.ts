import express from 'express';
import { createHandler } from '@try-zod/core';
import { userSchema } from './schemas';
import { getPrismaClient } from '@try-zod/core';
import { createUser, getUniqueUser, getAllUsers } from './data-access';
import { createUserUseCase, getUsersUseCase } from './usecases';

const prisma = getPrismaClient();

export const router = express.Router();


router.post('/user', createHandler({
    schema: userSchema,
    handler: async (req, res) => {
        const user = await createUserUseCase({getUniqueUser, createUser}, req.schema);
        res.send({ id: user.id });
    }
}));

router.get('/user', createHandler({
    handler: async (req, res) => {
        const users = await getUsersUseCase({getAllUsers});
        res.send({ users });
    }
}));

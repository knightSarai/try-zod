import express from 'express';
import request from 'supertest';
import { router } from './api';

import { getPrismaClient, createApp } from '@try-zod/core';


describe('test test', () => {
    let app: express.Application;

    beforeAll(() => app = createApp([router]));

    it('should create a user', async () => {
        const res = await request(app)
            .post('/user')
            .set('Accept', 'application/json')
            .send({
                name: 'John Doe',
                email: 'tes@gmail.com',
                password: '123'
            });

        expect(res.status).toBe(200);

    });

    it('should get users', async () => {
        const response = await request(app).get('/user')

        expect(response.body.users.length).toBe(1);
        expect(response.body.users[0].name).toBe('John Doe');
    });

    afterAll(async () => {
        const prisma = getPrismaClient();
        prisma.user.deleteMany();
    });

});

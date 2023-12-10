/* eslint-disable */
import fs from 'fs';
import { execSync, exec } from 'child_process';
import path from 'path';
import { PrismaClient } from '@prisma/client';


module.exports = async function () {
    const testDbPath = path.resolve(__dirname, '../../../../prisma/test.db');

    if (fs.existsSync(testDbPath)) {
        fs.unlinkSync(testDbPath);
    }

    console.log(process.env.DATABASE_URL);

    const prisma = new PrismaClient();

    try {

        await prisma.$connect();
        execSync('npx prisma migrate deploy', { stdio: 'inherit' });

    } finally {
        await prisma.$disconnect();
    }
};

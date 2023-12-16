/* eslint-disable */
import { execSync } from 'child_process';
import { PrismaClient } from '@prisma/client';


module.exports = async function () {
    const prisma = new PrismaClient();

    try {

        await prisma.$connect();
        execSync('npx prisma migrate deploy', { stdio: 'inherit' });

    } finally {
        await prisma.$disconnect();
    }
};

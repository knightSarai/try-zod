import { Prisma } from '@prisma/client';
import { getPrismaClient } from '@try-zod/core';

const prisma = getPrismaClient();

export function createUser(data: Prisma.UserCreateInput) {
    return prisma.user.create({
        data,
        select: {
            id: true
        }
    });
}

export function getUniqueUser(name: string, email: string) {
    return prisma.user.findFirst({
        where: {
            OR: [
                {
                    name
                },
                {
                    email
                }
            ]
        },
        select: {
            id: true
        }
    });
}

export function getAllUsers() {
    return prisma.user.findMany({
        select: {
            id: true,
            name: true
        }
    });
}

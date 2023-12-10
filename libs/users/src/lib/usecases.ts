import { UserAlreadyExistsError } from './errors';
import { UserIn } from './schemas';

export async function createUserUseCase(
    context: {
        getUniqueUser: (name: string, email: string) => Promise<{id: number} | null>;
        createUser: (data: UserIn) => Promise<{id: number}>
    },
    data: UserIn
) {
    const uniqueUser = await context.getUniqueUser(data.name, data.email);

    if (uniqueUser) {
        throw new UserAlreadyExistsError();
    }

    return await context.createUser(data);
}

export async function getUsersUseCase(
    context: {
        getAllUsers: () => Promise<{id: number, name: string}[]>
    }
) {
    return await context.getAllUsers();
}

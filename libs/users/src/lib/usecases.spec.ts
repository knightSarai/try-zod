import { createUserUseCase } from './usecases';
import { UserAlreadyExistsError } from './errors';


const createUser = async () => ({id: 1});

describe('test create user', () => {
    it('should create a user', async () => {
        const user = await createUserUseCase({
            getUniqueUser: async (name: string, email: string) => null,
            createUser
        }, 
        {
            name: 'test',
            email: 'test@email.com',
            password: 'test'
        });

        expect(user).toEqual({ id: 1 });
    });

    it('should throw a validaton error if user already exists', async () => {
        const data = {name: 'test', email: 'test@test.com', password: 'test'};
        const getUniqueUser = async (name: string, email: string): Promise<{id: number} | null> => ({ id: 1 });

        expect(async () =>
            await createUserUseCase({ getUniqueUser, createUser }, data)
        ).rejects.toThrow(UserAlreadyExistsError);;
    })
});


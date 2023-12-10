import axios, { AxiosError } from 'axios';

const userUrl = '/user';
const data = {
    name: 'John Doe',
    email: 'john@test.com',
    password: '123456',
}

describe('POST /user', () => {
    it('should creates a user', async () => {
        const res = await axios.post(userUrl, data);

        expect(res.status).toBe(200);
        expect(res.data).toEqual({ id: 1 });
    });

    it('should throw a validation error if user already exists', async () => {
        try {
            await axios.post(userUrl, data);
        } catch (error) {
            if (error instanceof AxiosError) {
                expect(error.response?.status).toBe(400);
                expect(error.response?.data).toEqual({errors: ['User already exists for this name or email']})
            }
        }
    });

});

describe('GET /user', () => {
    it('should return a list of users', async () => {
        const res = await axios.get(userUrl);
        const users = res.data.users as {id: number, name: string}[];
        const user = users.find((user) => user.name === 'John Doe');

        expect(res.status).toBe(200);
        expect(user).toBeTruthy();
    });
});

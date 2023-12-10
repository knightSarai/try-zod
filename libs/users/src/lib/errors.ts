import { ValidationError } from "@try-zod/core";

export class UserAlreadyExistsError extends ValidationError {
    constructor() {
        super('User already exists for this name or email');
        this.name = 'UserAlreadyExistsError';
    }
}

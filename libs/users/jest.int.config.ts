/* eslint-disable */
export default {
    displayName: 'users',
    preset: '../../jest.preset.js',
    testEnvironment: 'node',
    globalSetup: '<rootDir>/global-setup.ts',
    globalTeardown: '<rootDir>/global-teardown.ts',
    transform: {
        '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory: '../../coverage/libs/users',
    testMatch: ['**/*.int.spec.ts']
};

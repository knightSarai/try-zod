# TryZod
This is a simple project to try out Zod, a long with demonstrating how to apply clean architecture to an express api.

## Start the app

To start the development server run `nx serve try-zod`.


## Running E2E Test
Run the server with `test.db` as the database. This will be used for the e2e test.
```
DATABASE_URL="file:./test.db" nx run try-zod:serve
```
Then run your e2e test with:
```
    nx e2e try-zod-e2e
```

## Running Integration Test
Crate .env.test-int file in the root of the project and add the following:

```
DATABASE_URL="file:./test.db"
```

Then run your integration test with:

```
    nx run try-zod:test-int
```

## Running Unit Tests
Run `nx run try-zod:test` to execute the unit tests via [Jest](https://jestjs.io).


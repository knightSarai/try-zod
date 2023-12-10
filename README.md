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

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```


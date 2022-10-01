# Relay tutorial with TypeScript

to begin

```
> npm run dev:client
> npm run dev:server
```

# How it works?

For the client side, Vite is used.

For server, Express is used.

# Edit GraphQL scheme

1. edit the implementation under `/data/scheme`
2. run `npm run update-schema` to update schema file

# Compile Relay queries

Anytime relay queries are changed, rebuild the client-side types

```
> npm run relay
```

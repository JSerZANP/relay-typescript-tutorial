# Relay tutorial with TypeScript

To begin

```
> npm run dev:client
> npm run dev:server
```

Anytime relay queries are changed, rebuild the client-side types

```
> npm run relay
```

## Edit GraphQL scheme

1. edit the implementation under `/data/scheme`
2. run `npm run update-schema` to update schema file

# How it works?

For the client side, Vite is used.

For server, Express is used.

# How to use this tutorial

Check out the commit to try out each phase, view the PR for each explanation.

| phase                                                     | commit                                                                                                                                            | PR                                                                 |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 1. set up basic graphql server                            | [baa8e10a60251be59ece0ee20596ad5805e1cd38](https://github.com/JSerZANP/relay-typescript-tutorial/commit/baa8e10a60251be59ece0ee20596ad5805e1cd38) | [#1](https://github.com/JSerZANP/relay-typescript-tutorial/pull/1) |
| 2. basic relay query with customized graphql server logic | [4314e328eca454e13710bcbd31caf186f44b91ba](https://github.com/JSerZANP/relay-typescript-tutorial/commit/4314e328eca454e13710bcbd31caf186f44b91ba) | [#2](https://github.com/JSerZANP/relay-typescript-tutorial/pull/2) |

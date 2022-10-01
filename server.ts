import * as express from "express";
import { graphqlHTTP } from "express-graphql";
import * as cors from "cors";
import { schema } from "./data/schema";

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return "Hello world!";
  },
};

const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000);

console.log("Running a GraphQL API server at http://localhost:4000/graphql");

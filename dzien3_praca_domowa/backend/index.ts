import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import "reflect-metadata";

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [__dirname + "/resolvers/*.{ts,js}"],
  });
  const server = new ApolloServer({
    schema,
    playground: true,
  });

  // Start the server
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap(); // actually run the async function

# How to Publish a Schema to GraphQL Hive

To publish a schema to GraphQL Hive, use the hive schema:publish command. There are different variations of this command that can be found in the documentation: https://docs.graphql-hive.com/

In this case, we'll be using the stitching method. Here are the steps to publish the schema:

1. Create a token using the steps outlined in the following documentation: https://docs.graphql-hive.com/features/tokens
2. Use either the Hive CLI or Hive client to publish the schema. For this example, we'll be using the Hive CLI, which can be found in the documentation here: https://docs.graphql-hive.com/features/publish-schema#using-hive-cli
3. Publish the schema using the following URL:
   yarn hive schema:publish schema.graphql --author Neeraj --commit commit20230131 --service stitching --url http://localhost:4000/graphql
   The URL is saved in the schema registry when the schema is published, and can be used to connect to the remote server.

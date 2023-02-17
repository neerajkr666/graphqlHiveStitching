# graphqlHiveStitching

Usage of GraphQL Hive Managed Service with Schema Stitching
This project creates a GraphQL server that utilizes two remote APIs - a GraphQL API and a REST API - by stitching their schemas together. The GraphQL schema is created using GraphQL Hive (https://docs.graphql-hive.com/), a schema registry for GraphQL that allows you to manage, host, and collaborate on all your GraphQL schemas and operations, regardless of the underlying strategy you're using - be it schema stitching, federation, or a monolith.

We can use GraphQL Hive either as a standalone service or as a managed service provided by GraphQL Hive. In this project, we'll be using the latter approach.

Here are the steps to create the GraphQL server:

1. Publish the GraphQL schema to the schema registry using either the Hive CLI or Hive Client. You can find more information on publishing a schema to GraphQL Hive in the documentation here: https://docs.graphql-hive.com/features/publish-schema
2. For this use case, we have used the schema stitching approach. We'll fetch the GraphQL schema from the Hive Managed Service using the instructions provided here: https://docs.graphql-hive.com/features/registry-usage#schema-stitching
3. Use the locally available open API schema for the REST API.
4. Merge the two schemas and use the merged schema to start the server

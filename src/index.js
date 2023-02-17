const { graphqlHTTP } = require('express-graphql');
const express = require('express');
const { createServicesFetcher } = require('@graphql-hive/client')
const {mergeSchemas} = require('@graphql-tools/schema')
const cors = require('cors')

const openApi = require('./openApi')
const graphQL = require('./graphQL')

const fetchServices = createServicesFetcher({
    endpoint: 'https://cdn.graphql-hive.com/artifacts/v1/9311f703-bc59-43dd-942a-601eed2ae4a0',
    key: 'hv2YmI4YzNiOWEtMWY1Ny00NmNlLWI2MDgtZWFkNTFkZTVmZjVmOjk2NjgxNDlhMzE4NTUzYmQ1OGExNDAxZDE1OGNkNTc5M2EzZjI4ZGE='
})

async function main() {

    const app = express()

    const graphQlSchema = await graphQL();
    const openApiSchema = await openApi();

    let mergedSchema = mergeSchemas({
        schemas: [
            openApiSchema,
            graphQlSchema
        ]
    });

    
    app.use(
        '/graphql', cors(), (req, res) => graphqlHTTP({
            schema: mergedSchema,
            // context: req.headers,
            context: ({ req }) => ({ req }),    
            graphiql: {
                headerEditorEnabled: true
            }
        })(req, res)
    );
    app.listen(8090, () => console.log('Application Started at localhost:8090/graphql'));
}

main().catch(err => {
    console.error(err)
    process.exit(1)
})
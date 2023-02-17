const _ = require('lodash');
const { createGraphQLSchema } = require('openapi-to-graphql');

var generatedSchemas = {};
module.exports = async function(){
    const yamlPath = require('./books.json');

    const options = {
        requestOptions: {
            headers: (method, path, title, resolveParams)=>{
                var context = resolveParams.context;
                var reqHeaders = _.pick(context, ['accept', 'content-type'])
                return reqHeaders;
            }
        },
        baseUrl: 'http://localhost:8080',
        operationIdFieldName:false,
        simpleEnumValues:false
    }

    const {schema, report} = await createGraphQLSchema(yamlPath, options);
    // generatedSchemas['books'] = schema;
    return schema
}
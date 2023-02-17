const { createServicesFetcher } = require("@graphql-hive/client");
const { buildSchema } = require("graphql");
const { UrlLoader } = require("@graphql-tools/url-loader");
const { stitchSchemas } = require("@graphql-tools/stitch");
const { _ } = require("lodash");

module.exports = async function () {
  const urlLoader = new UrlLoader();

  const fetchServices = createServicesFetcher({
    endpoint:
      "https://cdn.graphql-hive.com/artifacts/v1/9311f703-bc59-43dd-942a-601eed2ae4a0",
    key: "hv2YmI4YzNiOWEtMWY1Ny00NmNlLWI2MDgtZWFkNTFkZTVmZjVmOjk2NjgxNDlhMzE4NTUzYmQ1OGExNDAxZDE1OGNkNTc5M2EzZjI4ZGE=",
  });

  const services = await fetchServices();
  const subschemas = services.map((service) => {
    return {
      schema: buildSchema(service.sdl),
      executor: urlLoader.getExecutorAsync(service.url),
    };
  });
  const schema = stitchSchemas({
    subschemas,
  });
  return schema;
};

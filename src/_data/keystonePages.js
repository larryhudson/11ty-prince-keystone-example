const { request, gql } = require("graphql-request");

const fetchQuery = ({ query, variables }) => {
  return request(process.env.GRAPHQL_ENDPOINT, query, variables);
};

module.exports = async () => {
  const data = await fetchQuery({
    query: `query PagesQuery {
        pages(orderBy: {
          order: asc
        }) {
          title
          slug
          order
          content {
            document
          }
        }
      }`,
  }).then((r) => r.pages);
  console.log({ data });
  return data;
};

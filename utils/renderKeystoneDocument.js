const React = require("react");
const reactDOMServer = require("react-dom/server");
const { DocumentRenderer } = require("@keystone-6/document-renderer");

const renderKeystoneDocument = ({ document }) => {
  return reactDOMServer.renderToString(
    DocumentRenderer({
      document,
    })
  );
};

module.exports = {
  renderKeystoneDocument,
};

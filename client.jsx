const React = require("react");
const ReactDom = require("react-dom");
const InstallTest = require("./InstallTest");
const Baseball = require("./baseball");

ReactDom.render(
  <div>
    <InstallTest />
    <Baseball />
  </div>,
  document.querySelector("#root")
);

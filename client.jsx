const React = require("react");
const ReactDom = require("react-dom");
const InstallTest = require("./InstallTest");
const Baseball = require("./baseball");
const Baseball2 = require("./baseball2");
const Speed = require("./speed");
const Rps = require("./rockPaperScissors");

ReactDom.render(
  <div>
    <InstallTest />
    숫자야구
    <Baseball />
    <Baseball2 />
    <Speed />
    <Rps />
  </div>,
  document.querySelector("#root")
);

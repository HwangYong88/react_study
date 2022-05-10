const React = require("react");
const Try = (fruits) => {
  console.log(fruits);
  // key가 잘안됨
  return (
    <li>
      <div>
        <b>{fruits.index}</b>//
        <b>{fruits.value.fruit}</b>//
        <b>{fruits.value.taste}</b>
      </div>
    </li>
  );
};

module.exports = Try;

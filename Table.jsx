const React = require("react");
const { useState, useRef } = React;
const Tr = require("./Tr");

const Table = ({ onClick, tableData, dispatch }) => {
  return (
    <table onClick={onClick}>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr key={i} rowIndex={i} rowData={tableData[i]} dispatch={dispatch} />
        ))}
    </table>
  );
};

module.exports = Table;

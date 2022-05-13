const React = require("react");
const { useState, useRef, useCallback, useEffect } = React;

const Td = ({ rowIndex, cellIndex, dispatch, cellData }) => {
  // 테이블 최적화 하기(성능최적화하는방법) : 클릭할시에 전체가아니라 한칸(td)만 바뀌어야 최적화
  // useEffect와 useRef로 리렌더링 되는 원인을 찾기
  const ref = useRef([]);
  useEffect(() => {
    console.log(
      rowIndex === ref.current[0],
      cellIndex === ref.current[1],
      dispatch === ref.current[2],
      cellData === ref.current[3]
    );
    // 바뀌는게 있으면 위가 false가 나타남 : 지금은 cellData가 false이므로 cellData이 바뀌어서 리렌더링이 되게된다
    ref.current = [rowIndex, cellIndex, dispatch, cellData];
  }, [rowIndex, cellIndex, dispatch, cellData]);

  const onClickTd = useCallback(() => {
    if (cellData) {
      return;
    }
    dispatch({ type: "CLICK_CELL", row: rowIndex, cell: cellIndex });
    dispatch({ type: "CHANGE_TURN" });
  }, [cellData]);
  return <td onClick={onClickTd}>{cellData}</td>;
};

module.exports = Td;

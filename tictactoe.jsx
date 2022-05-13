const React = require("react");
const { useState, useRef, useReducer, useCallback, useEffect } = React;
const Table = require("./Table");

const initialState = {
  winner: "",
  turn: "O",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  recentCell: [-1, -1],
};

const SET_WINNER = "SET_WINNER";
const CLICK_CELL = "CLICK_CELL";
const CHANGE_TURN = "CHANGE_TURN";

const reducer = (state, action) => {
  // 스테이트를 바꾸려면
  // 디스패치를 통해서 액션을 리듀서에게 보낸다.
  // 받은 액션은 종류에따라 리듀서에서 처리한다.
  // 액션이름은 대문자가 기본

  // useReducer는 비동기 처리이므로
  // 어디서 승리자 처리를 할지가 고민. 비동기인 스테이스에서 뭔가를 처리하려면 useEffect를 쓴다
  switch (action.type) {
    case "SET_WINNER":
      return {
        ...state,
        winner: action.winner,
      };
    case "CLICK_CELL":
      tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    case "CHANGE_TURN":
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };
  }
};

const ttt = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //-------------------리듀서를 쓰게 되면 밑의 3개는 필요없음
  // const [winner, setWinner] = useState("");
  // const [turn, setTurn] = useState("");
  // const [tableData, setTableData] = useState([
  //   ["", "", ""],
  //   ["", "", ""],
  //   ["", "", ""],
  // ]);

  const onClickTable = useCallback(() => {
    //dispatch({ type: "SET_WINNER", winner: "O" });
  }, []);

  // 승리처리(X자만처리)
  useEffect(() => {
    const [row, cell] = state.recentCell;
    let win = false;
    if (row < 0) {
      return;
    }
    if (
      state.tableData[0][0] === (state.turn === "X" ? "O" : "X") &&
      state.tableData[1][1] === (state.turn === "X" ? "O" : "X") &&
      state.tableData[2][2] === (state.turn === "X" ? "O" : "X")
    ) {
      state.win = true;
    }
    if (
      state.tableData[0][2] === (state.turn === "X" ? "O" : "X") &&
      state.tableData[1][1] === (state.turn === "X" ? "O" : "X") &&
      state.tableData[2][0] === (state.turn === "X" ? "O" : "X")
    ) {
      state.win = true;
    }
    if (state.win) {
      console.log(state.turn === "X" ? "O" : "X");
      // 승리
      dispatch({ type: "SET_WINNER", winner: state.turn === "X" ? "O" : "X" });
    }
    // 무승부검사는 생략
    // 사실 td의 체인지턴을 여기에두면 승리검사를 하고 이긴게 아니면 그때 체인지턴을 하면된다
  }, [state.recentCell]);

  return (
    <>
      <div>
        <Table
          onClick={onClickTable}
          tableData={state.tableData}
          dispatch={dispatch}
        />
        {state.winner && <div>{state.winner}님의 승리</div>}
      </div>
    </>
  );
};
// &&의 의미 : state.winner가 있으면 뒤에 처리한다
// dispatch는 넘겨줘야함

module.exports = ttt;

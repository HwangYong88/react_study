const React = require("react"); // 노드의 모듈 시스템
const { useState, useRef } = React;
const Try = require("./Try");

const Baseball = () => {
  const [answer, setAnswer] = "";
  const [value, setValue] = useState("");
  const [tries, setTries] = useState([1, 2]);
  const [fruits, setFruits] = useState([
    { fruit: "apple", taste: "good" },
    { fruit: "pine", taste: "bad" },
    { fruit: "grape", taste: "excel" },
  ]);
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    var strike = 0;
    var ball = 0;

    // 스트라이크 볼 확인
    if (value !== null) {
    }
    setCheck("정답체크" + strike + "스트라이크" + ball + "볼");
    setValue("");

    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div></div>
      <form onSubmit={onSubmitForm}>
        <label>{answer}</label>
        {/*밸류와 온체인지는 세트*/}

        <input
          type="number"
          ref={inputRef}
          onChange={onChangeInput}
          value={value}
          maxLength={4}
        />
      </form>
      <button>클릭</button>
      <div>시도 : {fruits.length}</div>
      {/*다른 파일로부터 컴포넌트 가져오기*/}
      {/*HTML에서는 어트리뷰트 , 리액트에서는 프롭스로 부른다 넘겨주는값*/}
      <ul>
        {fruits.map((v, i) => {
          return (
            <Try value={v} index={i} key={v.fruit + v.taste}>
              .
            </Try>
          );
        })}
      </ul>
      {/*
        리액트는 반복문을 map으로 
        1. 반복되는것을 배열로 만들기
        2. 더좋게 만들기. 프롭스
        3. key를 안적으면 에러. key는 고유한 값을 적어야한다.
        4. 화살표함수는 리턴을 생략할 수 있다.
        5. [배열].map(()=>{return()})
        6. 리액트에서 key를 기준으로 엘리먼트를 추가하거나 
        수정삭제 판단하기 때문에 배열의 순서가 바뀌면 문제
        */}
      <ul>
        {/*맵의 예제 :  과일*/}
        {[
          { fruit: "apple", taste: "good" },
          { fruit: "pine", taste: "bad" },
          { fruit: "grape", taste: "excel" },
        ].map((v) => {
          return (
            <li key={v.fruit + v.taste}>
              <b>{v.fruit}</b> - {v.taste}
            </li>
          );
        })}
      </ul>
      <div></div>
    </>
  );
};

module.exports = Baseball;

//export const hello = "hello"; // 가져올때 {hello}
//export default baseb; // 가져올때 import baseb;
// 노드에서는 requrie (맵팩에서 import 하면 에러), 리액트에서는 import, export를 쓰지만 호환된다
// const Try = require("./Try"); > module.exports = Try;

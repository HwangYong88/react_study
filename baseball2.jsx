const React = require("react"); // 노드의 모듈 시스템
const { useState, useRef } = React;

const Baseball2 = () => {
  const getNumbers = () => {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let array = "";
    for (let i = 0; i < 4; i += 1) {
      const chosen = candidate.splice(
        Math.floor(Math.random() * (9 - i)),
        1
      )[0];
      array = array.concat(chosen);
    }
    return array;
  };

  const [answer] = useState(getNumbers());
  const [value, setValue] = useState("");
  const [tries, setTries] = useState([]);
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    answerCheck(value);
    setValue("");
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const answerCheck = (value) => {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 4; i++) {
      for (let k = 0; k < 4; k++) {
        if (value.charAt(i) === answer.charAt(k)) {
          if (i == k) {
            strike++;
          } else {
            ball++;
          }
        }
      }
    }
    if (value.length == 4) {
      //setTries(tries.concat(inputAnswer));
      setTries([
        ...tries,
        { idx: tries.length + 1, value: value, strike: strike, ball: ball },
      ]);
      // 스프레드 연산자 이용(push를 하면 안된다)
      //---------------------------------------------------------------------------------------
      // 변수 선언 방법 (let, const, var)
      // let으로 변경 가능한 지역변수 선언,
      // const는 변경 불가능한 지역변수 선언,
      // var은 전체 범위를 갖는 오래된 선언 키워드
    }
    //------------------------------------------------------------------------------------------
    // include 함수 예시 : 2번째인자는 여기위치부터 검색 시작한다는 의미(전체의경우에는 -1넣기)
    // let arr = ["a", "b", "c", "a", "b", "b"];
    // for (let i = 0; i < 6; i++) {
    //   console.log(i + "/" + arr.includes("a", i));
    //   // 결과 t/t/t/t/f/f
    // }
  };

  return (
    <>
      <div></div>
      <form onSubmit={onSubmitForm}>
        <label>{answer}</label>

        <input
          type="number"
          ref={inputRef}
          onChange={onChangeInput}
          value={value}
          maxLength="4" // 숫자의 경우에는 맥스랭스가 먹히지 않기 때문에 다른처리를 해야한다
          // 폼안에 들어가야할것 라벨, 인풋, 버튼
        />
        <button>클릭</button>
      </form>
      <div>
        <ul>
          {tries.map((tries) => {
            return (
              <li key={tries.idx}>
                <b>{tries.idx}번째 시도 : </b>
                <b>{tries.value}</b>
                <b>의 결과는 {tries.strike}스트라이크 </b>
                <b>{tries.ball}볼 입니다</b>
              </li>
            );
          })}
        </ul>
      </div>
      <div></div>
    </>
  );
};

module.exports = Baseball2;

// 프롭스에 대해서--------------------------------------------------------------------
// 프롭스를 쓰다보면 필요없는 렌더링이 자주 발생하게 된다.
// 1. 찾아내기
// 2. 해결하기

// 크롬 웹스토어 -> 리액트 디벨로퍼 툴
// 훅스로 선언했던것이나, 컴포넌트 등을 볼 수 있다.
// 하이라이트 기능 : 화면이 리렌더링 되는 부분이 색깔표시됨, 한가:파랑 / 바쁨:주황,빨강
// 스테이트와 프롭스가 바뀔때만 렌더링 되지만, setState호출하기만해도(내용이비어잇어도) 렌더링된다.
// shouldComponentUpdate(nextprops, nextState, nextContext){}
// >> shouldComponentUpdate는 React.memo를 사용한다

// 프롭스의 변경시 주의점
// 자식이 바꾸면 안되고, 부모에서 바꿔야한다.
// 하지만 종종 자식에서 useState로 바꾸기도 한다.

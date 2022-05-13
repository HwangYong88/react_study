const React = require("react"); // 노드의 모듈 시스템
const { useState, useRef, useEffect } = React;

const rps = () => {
  // 라이프 사이클 정리(순서)
  // 시작 > 첫렌더링> 레프> 컴포넌트디드마운트> 프롭스,스테이트변경> 컴포슈드업뎃(리액트.메모)>
  // 렌더링> 컴포넌트디드업뎃> 부모가나를 없앨때> 컴포넌트 윌 언마운트> 소멸 >끝
  //   const componentDidMount = () => {}; // 컴포넌트가 첫 렌더링된 후 -> 보통 여기에 비동기 요청을 많이함(셋 인터벌 등)
  //   const componentDidUpdate = () => {}; // 리렌더링
  //   const componentWillUnmount = () => {}; // 컴포넌트가 제거되기 직전 -> 비동기 요청 정리를 많이 담당(클리어 인터벌 등)
  // 비동기 요청이란?
  // 만약 컴포넌트 디드마운트에서 셋 인터벌(일정간격으로 함수실행) 해놓으면 컴포넌트 윌 언마운트에서 꺼야
  // 처리가 멈춘다. 안끄면 인터넷끌때까지 계속됨

  // - hooks는 라이프사이클이 없어서 useEffect를 사용해야한다.
  // - useEffect를 사용하려면 useRef처럼 먼저 불러와야한다.

  const [img, setImg] = useState("✊");
  const [result, setResult] = useState("");
  const interval = useRef();
  // useEffect는 componentDidMount, componentDidUpdate 역할(1대1 대응은 아니지만 두개의 역할동시에함)
  useEffect(() => {
    // interval.current = setInterval(changeImg, 1300); 시스템 부하로 꺼둠
    return () => {
      clearInterval(interval.current);
    };
  }, [img]); //이렇게 의존성 배열에 img 상태 값을 넣으면 img가 변경될 때만 interval 함수가 호출된다.
  //추후에 새로 추가되는 변수가 있다면 그 변수도 의존성 배열에 넣어주어야 한다.

  const changeImg = () => {
    if (img == "✊") {
      setImg("✌");
    } else if (img == "✌") {
      setImg("✋");
    } else if (img == "✋") {
      setImg("✊");
    }
  };

  const imgClick = (e) => {
    //const imgClick = (e) => ()=>{ 위에꺼랑 비교하면 온클릭의 앞에 ()=>를 왼쪽에 붙이는 것처럼 할 수있다.
    // 온클릭에 ()=> 가 없으면 바로 실행되버림
    // 이것을 하이오더펑션, 고차함수 라고함

    // useLayoutEffect 화면레이아웃이 바뀔때 쓰는 것인데 거의 쓸일없음
    clearInterval(interval.current);
    if (img == e) {
      setResult("무");
    } else {
      if (img == "✊") {
        if (e == "✌") {
          setResult("패");
        } else {
          setResult("승");
        }
      } else if (img == "✌") {
        if (e == "✋") {
          setResult("패");
        } else {
          setResult("승");
        }
      } else if (img == "✋") {
        if (e == "✊") {
          setResult("패");
        } else {
          setResult("승");
        }
      }
    }
    //setImg("✊"); 이부분이 들어있으면 cleartIntaval되엇다가  interval이 다시실행된다
  };

  return (
    <>
      <div></div>
      <h1>{img}</h1>
      <button id="rock" onClick={() => imgClick("✊")}>
        바위
      </button>
      <button id="scissor" onClick={() => imgClick("✌")}>
        가위
      </button>
      <button id="paper" onClick={() => imgClick("✋")}>
        보
      </button>
      {result}
      <div></div>
    </>
  );
};

module.exports = rps;

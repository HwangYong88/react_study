const React = require("react"); // 노드의 모듈 시스템
const { useState, useRef, useEffect } = React;

const lotto = () => {
  const [numbers, setNumbers] = useState([]);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(makeNumber, 200);
    return () => {
      clearInterval(interval.current);
    };
    // return ()=> 가 있으면 컴포넌트 디드 윌언마운트 자리
  }, [numbers]);
  // [numbers]부분이 빈배열이면 컴포넌트 디드마은트와 동일함
  // [numbers]라고들어있으면 배열에 요소가 있으면 컴포넌트디드마운트와 컴포넌트 디드 업데이트 둘다 수행

  const makeNumber = () => {
    if (numbers.length !== 7) {
      let pick = Math.floor(Math.random() * 44) + 1;
      if (!numbers.some((numbers) => numbers.number === pick)) {
        //------------------------------------------------------some펑션
        setNumbers([
          ...numbers,
          {
            idx: numbers.length,
            number: pick,
          },
        ]);
      } else {
        console.log("sanme");
      }
    } else {
      clearInterval(interval.current);
    }
    console.log(numbers);
  };

  return (
    <>
      <div></div>
      당첨 숫자 :
      <li>
        {numbers.map((numbers, idx) => {
          return <b key={numbers.idx}>{numbers.number}/</b>;
        })}
      </li>
      보너스 :<div>{numbers.indexOf(3)}</div>
    </>
  );
};

module.exports = lotto;

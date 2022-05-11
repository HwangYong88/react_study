const React = require("react");
const { useState, useRef } = React;

const speed = () => {
  const [screenState, setScreenState] = useState({
    sangte: "waiting",
    messgage: "클릭 해서 시작",
    result: [],
  });
  timeout = "";
  startTime = "";
  endTime = "";

  const onClickScreen = () => {
    //console.log(screenState);
    if (screenState.sangte === "waiting") {
      setScreenState({
        sangte: "ready",
        messgage: "초록색이 되면 클릭",
        result: screenState.result,
      });
      timeout = setTimeout(() => {
        setScreenState({
          sangte: "now",
          messgage: "지금 클릭",
          result: screenState.result,
        });
        startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (screenState.sangte === "ready") {
      clearTimeout(timeout);
      setScreenState({
        sangte: "waiting",
        messgage: "너무 성급함",
        result: screenState.result,
      });
    } else if (screenState.sangte === "now") {
      endTime = new Date();
      setScreenState({
        sangte: "waiting",
        messgage: "클릭 해서 시작",
        //result: screenState.result.concat(endTime - startTime),
        result: [...screenState.result, endTime - startTime],
      });
    }
  };

  const onReset = () => {
    setScreenState({
      sangte: "waiting",
      messgage: "클릭 해서 시작",
      result: [],
    });
  };

  const average = () => {
    console.log(screenState.result.length);
    return screenState.result.length == 0 ? null : (
      <div>
        <div>
          평균시간 :
          {screenState.result.reduce(
            (accumulate, value) =>
              (accumulate + value) / screenState.result.length
          )}
          ms
        </div>
        <button onClick={onReset}>리셋</button>
      </div>
    );
  };

  // 리턴 안에서는 jsx임에도 불구하고 {}처리를 하면 js코드를 사용 할 수 있다. if문이나 for문
  //   return ({
  //       {(()=>{
  //           if(true){

  //           }
  //       })}
  //   })

  return (
    <>
      <div id="screen" className={screenState.sangte} onClick={onClickScreen}>
        {screenState.messgage}
      </div>
      {average()}
    </>
  );
};

module.exports = speed;

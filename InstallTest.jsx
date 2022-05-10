const React = require("react"); // 노드이 모듈
const { useState, useRef } = React;

// 기존의class 를 훅스로 바꾸는것 . 함수로 바꾸면된다
const InstallTest = () => {
  const [word, setWord] = useState("초기값");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label id="label" htmlFor="wordInput">
          글자를 입력하세요
        </label>
        <input
          id="wordInput"
          className="wordInput"
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
        />
        <button>클릭</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = InstallTest;

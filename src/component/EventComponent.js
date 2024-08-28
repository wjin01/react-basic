import { useState } from "react";


function EventComponent() {

  // let a = document.querySelector("input[name=name]");
  
  //1. 인풋이 관리할 값을 state로 선언함
  //2. 인풋태그의 value에 state 연결
  //3. 이벤트를 통해 input값 제어
  let [name, setName] = useState('');
  let [topic, setTopic] = useState('');
  let [food, setFood] = useState('');

  let handleName = (e) => { //이벤트객체
    //console.log(e.target.value); //사용자가 입력한 값
    setName(e.target.value);
  }

  let handleTopic = (e) => {
    setTopic(e.target.value);
  }

  let handleClick = () => {
    alert(`${name} 님의 입력값 ${topic}`)
    setName('');
    setTopic('');
  }

  let handleKeyUp = (e) => {
    if(e.key === 'Enter') { //엔터를 눌렀을 때
      handleClick();
    }
  }

  let handleChange = (e) => {
    setFood(e.target.value);
  }


  return(
    <div>
      인풋이벤트 핸들링
      <br/>

      <input type="text" name="name" value={name} onChange={handleName}/>
      <br/>
      결과 state값: {name}

      <br/>
      <input type="text" name="topic" value={topic} onChange={handleTopic} onKeyUp={handleKeyUp}/>
      <br/>
      결과 state값: {topic}

      <br/>
      <button type="button" onClick={handleClick}>클릭이벤트</button>



      <hr/>
      <h3>셀렉트 태그 핸들링(실습)</h3>
      <pre>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</pre>            

      <select onChange={handleChange}>
          <option>피자</option>
          <option>햄버거</option>
          <option>치킨</option>
      </select>

      <h3>선택한 결과</h3>
      <p>{food}</p>
    </div>
  )
}

export default EventComponent;
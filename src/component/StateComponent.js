import { useState } from "react";


function StateComponent() {

  //useState는 함수형 컴포넌트에서만 사용할 수 있는 hook
  //반환이 배열이고 [0]에 현재 데이터, [1]에 값을 변경하는 setter 함수

  let [data, setData] = useState('초기값');
  let [msg, setMsg] = useState('black');
  // let data = result[0]; //data
  // let setData = result[1]; //func
  
  let enter = () => {
    //data = "이렇게 값을 바꾸면?"; //값을 직접 바꾸는 것을 허용하지 않음
    setData("이렇게 값을 바꿔야 함"); //값을 변경하는 setter 함수 -> 비동기적으로 데이터를 change, 리렌더링 수행
  }

  console.log(data);
  

  return (
    <div>
      현재 데이터: {data}
      <br/>
      값 변경하기 <button onClick={enter}>입장</button>
      <br/>
      값 변경하기 <button onClick={() => setData("퇴장했습니다")}>퇴장</button>
      <br/>

      <h3 style={{color : msg}}>{msg}</h3>
      <button onClick={() => setMsg('red')}>붉은색</button>
      <button onClick={() => setMsg('green')}>푸른색</button>
      <button onClick={() => setMsg('yellow')}>황색</button>

      <hr/>
    </div>

  )

}

export default StateComponent;
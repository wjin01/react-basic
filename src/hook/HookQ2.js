import { useRef, useState } from "react";

const HookQ2 = (state, action) => {
    /*
    실습(할일목록 만들기 )
    1. state는 {todo: '', list: []} 로 관리합니다.
    2. 할일 목록을 작성하고 클릭시, list에 인풋이 입력한 값을 추가하고 map을 이용해서 반복처리해주세요
    3. 등록 이후에는 ref를 활용해서 input태그에 포커싱해주세요.
    */

    const todoRef = useRef(null);
    const [data, setData] = useState({todo: '', list: []});
    
    
    //인풋데이터 핸들링
    const handleTodo = (e) => {
        setData({...data, ["todo"] : e.target.value});
    }

    const handleClick = () => {
        let newList = data.list;
        newList.push(data.todo);
        setData({todo: '', list: newList});
        todoRef.current.focus(); //포커싱
    }

    return (
        <div>
            <h3>실습</h3>

            <input type="text" placeholder="할일 목록을 작성하세요" value={data.todo} onChange={handleTodo} ref={todoRef}/>
            <button type="button" onClick={handleClick}>등록</button>
            <ul>
				{
                    data.list.map((item, index) => <li key={index}>{index +1}. {item}</li>)
                }
            </ul>
        </div>
    )
}

export default HookQ2;
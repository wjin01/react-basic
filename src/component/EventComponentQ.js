import { useState } from "react";

function EventComponentQ() {

  let [form, setForm] = useState({data : '', result : ''})


  let handleChange = (e) => {
    setForm({data : e.target.value, result : form.result}) 
  }
  
  let handleClick = () =>  {
    setForm({data : '', result : form.data})
  }

  return(
    <div>
      <h3>인풋데이터 핸들링(실습)</h3>
      <input type="text" value={form.data} onChange={handleChange}/>
      <button type="button" onClick={handleClick}>추가하기</button>
      <h3>결과</h3>
      <p>{form.result}</p>
    </div>
  )
}

export default EventComponentQ;
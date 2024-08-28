import ClassComponent from "./component/ClassComponent";
import StateComponent from "./component/StateComponent";
import StateComponentQ from "./component/StateComponentQ";
import {Fragment} from 'react';


function App() {
  
  return (
    <Fragment>
      <StateComponent/>

      <hr/>
      <StateComponentQ/>

      <hr/>
      <ClassComponent name="홍길동" age={20}/>

    </Fragment>
  )

}

export default App;
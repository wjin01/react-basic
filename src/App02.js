import MyComponent from "./component/component";

//예제 app
function App() {

  return (
    <div>
      <MyComponent name={"짱구"} age={5} addr={"서울시"}/>
      <MyComponent name={"훈이"} age={6} addr={"부산시"}/>
    </div>
  )
}

export default App;
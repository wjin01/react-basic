import './App.css'; //css 파일 import
import styled from './App.module.css'; //module.css

function App() {

  //1. css 파일명은 컴포넌트와 동일한 이름으로 생성


  return (
    <>
      <div className="app-title">
        css 파일로 디자인
      </div>  
      <div style={{color: 'blue', border: '1px solid #777'}}>
        직접 디자인
      </div>

      <div className={styled.app_wrap}>
        <p className={styled.title}>모듈로 디자인</p>
        <p className="content">global 속성</p>
      </div>
    </>
  )
}

export default App;

import {useEffect, useState} from 'react';

function HookEffect() {

  //useState훅
  const [data, setData] = useState('');
  const [age, setAge] = useState('');

  //useEffect훅 => 컴포넌트 라이프사이클 관리
  // useEffect(() => {
  //   console.log('마운트 이후에 동작됨(렌더링 이후에 동작)');
  // });

  // useEffect(() => {
  //   console.log('마운트 이후에 딱 한 번만 실행됨(네트워크상으로 데이터를 가져올 때 사용)');
  // }, []);
  
  // useEffect(() => {
  //   console.log('특정 값이 변경되어 렌더링 될 때 동작(특정 state가 변경될 때만 실행');
  // }, [data, age]);

  // useEffect(() => {
  //   console.log('effect 실행됨');
  //   return () => {
  //     console.log('umnount(소멸) 되기 전에 실행됨');
  //   }
  // }, [data]); //data가 변경 될때만

  //useEffect는 여러개일 수 있음
  // useEffect(() => {
  //   console.log('effect2 실행됨');
  // });

  //무한루프에 빠질 수 있는 코드
  // const [ex, setEx] = useState({name : '홍길동'});
  // useEffect(() => {
  //   let copy = {...ex};
  //   setEx(copy);
  // }, [ex]);

  console.log('코드 실행됨');
  
  

  return(
    <>
      <input type='text' value={data} onChange={(e) => setData(e.target.value)}/>
      <input type='text' value={age} onChange={(e) => setAge(e.target.value)}/>
      {data}, 
      {age}
    </>
  )
}

export default HookEffect;
import React, { useEffect, useState } from "react";

const Fetches:React.FC = () => {
  const [APIData, setAPIData] = useState('')
  const fetchAPIData = () => {
    fetch('http://localhost:8000/') // endpoint와 포트 번호를 지정
    .then((response) => {
        // 응답을 JSON 형태로 변환
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(response)
        return response.json();
      }).
      then((data)=>{
        // 변환된 데이터를 처리 (콘솔에 출력)
        setAPIData(data);
        console.log(data);
      })
      .catch((error)=> {
        // 오류 발생 시 처리 ()
        console.error('There was a problem with your fetch operation:', error);
      })
  }
useEffect(()=>{
fetchAPIData()
}, [setAPIData])

return (
  <main>
    <button onClick={fetchAPIData}>fetchAPIData</button>
    <p>{APIData}</p>
  </main>
);

}
export default  Fetches;
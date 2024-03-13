import React, { useState, useEffect } from "react";

const ReadData: React.FC = () => {
  const [data, setData] = useState([])
  const fetchAPIData = () => {
    fetch('http://localhost:8000/read') // endpoint와 포트 번호를 지정
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
        setData(data);
        console.log(data);
      })
      .catch((error)=> {
        // 오류 발생 시 처리 ()
        console.error('There was a problem with your fetch operation:', error);
      })
  }
useEffect(()=>{
fetchAPIData()
}, [data])


  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {/* 데이터 표시 로직 추가 */}
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadData;

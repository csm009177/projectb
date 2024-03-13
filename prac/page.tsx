'use client'
import { useEffect, useState } from "react";
export default function Home() {
  // API 서버로부터 데이터를 가져오는 함수
  const [apidata, setApidata] = useState('')
  const fetchData = () => {
    fetch('http://localhost:8000/') // endpoint와 포트 번호를 지정
      .then((response) => {
        // 응답을 JSON 형태로 변환
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // 변환된 데이터를 처리 (여기서는 콘솔에 출력)
        setApidata(data.key)
        console.log(data);
      })
      .catch((error) => {
        // 오류 발생 시 처리 (여기서는 콘솔에 오류 메시지 출력)
        console.error('There was a problem with your fetch operation:', error);
      });
  };
  // 컴포넌트가 마운트될 때 fetchData 함수 호출
  useEffect(() => {
    fetchData();
  }, []); // 빈 배열을 넘겨주어 컴포넌트가 마운트될 때만 fetchData 함수가 실행되도록 함
  return (
    <main className="w-1/2 h-1/2">
      {apidata}
    </main>
  );
}
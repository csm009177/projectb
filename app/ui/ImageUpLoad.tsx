"use client";

import React, { useState } from 'react';

const ImageUpLoad: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // 파일 선택 시 호출되는 함수
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      // 선택된 파일을 상태에 저장
      setSelectedFile(event.target.files[0]);
    }
  };

  // 파일 업로드 시 호출되는 함수
  const handleUpload = () => {
    if (selectedFile) {
      // FormData를 사용하여 파일을 서버로 전송
      const formData = new FormData();
      formData.append('image', selectedFile);

      // 서버에 이미지 업로드 요청
      fetch('/upload', {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          if (response.ok) {
            console.log('이미지가 성공적으로 업로드되었습니다.');
            // 성공 시 추가 작업 수행
          } else {
            console.error('이미지 업로드 실패:', response.statusText);
          }
        })
        .catch(error => {
          console.error('이미지 업로드 중 오류 발생:', error);
        });
    }
  };

  return (
    <div>
      <h2>이미지 업로드</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>업로드</button>
    </div>
  );
};

export default ImageUpLoad;

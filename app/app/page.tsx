"use client";
import FetcheData from './FetcheData';
import CreateData from "./CreateData";
import React, { useEffect, useState } from "react";
import { FetchApiDatasContext } from './context/APIContext';

export default function Home() {
  const [apiData, setApiData ] = useState<string|null>('')
  // API 서버로부터 데이터를 가져오는 함수
  return (
    <main>
      <FetchApiDatasContext.Provider value={{apiData, setApiData}}>
      <FetcheData />
      <div>
        <CreateData />
      </div>
      </FetchApiDatasContext.Provider>
    </main>
  );
}

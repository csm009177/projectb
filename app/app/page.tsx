"use client";
import FetcheData from './crudtest/FetcheData';
import CreateData from "./crudtest/CreateData";
import React, { useEffect, useState } from "react";
import { FetchApiDatasContext } from './context/APIContext';
import ReadData from './crudtest/ReadData';

export default function Home() {
  const [apiData, setApiData ] = useState<{}|null>({})
  // API 서버로부터 데이터를 가져오는 함수
  return (
    <main>
      <FetchApiDatasContext.Provider value={{apiData, setApiData}}>
      <FetcheData />
      <div>
        <CreateData />
        <ReadData/>
      </div>
      </FetchApiDatasContext.Provider>
    </main>
  );
}

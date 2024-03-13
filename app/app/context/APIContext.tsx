import { createContext, Dispatch, SetStateAction } from "react";

export const FetchApiDatasContext = createContext<{
  apiData: {};
  setApiData: Dispatch<SetStateAction<{}>>;
}>({ apiData: {}, setApiData: () => {} });
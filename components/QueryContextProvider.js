import { createContext, useState } from 'react';

//create a context
export const QueryContext = createContext();

export default function QueryContextProvider(props) {
  const [queryData, setQueryData] = useState();

  return (
    // this is the provider providing state
    <QueryContext.Provider value={[queryData, setQueryData]}>
      {props.children}
    </QueryContext.Provider>
  );
}

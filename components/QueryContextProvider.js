import { createContext, useState } from 'react';

//create a context
export const QueryContext = createContext();

export default function QueryContextProvider(props) {
  const [queryData, setQueryData] = useState();
  const [numberOfScreens, setNumberOfScreens] = useState(0);

  return (
    // this is the provider providing state
    <QueryContext.Provider value={[numberOfScreens, setNumberOfScreens]}>
      {props.children}
    </QueryContext.Provider>
  );
}

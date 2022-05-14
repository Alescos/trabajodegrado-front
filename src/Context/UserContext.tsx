import React from 'react';

// eslint-disable-next-line object-curly-newline
const Context = React.createContext({});

/* export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState([]); */
export function UserContextProvider() {
  /* <Context.Provider
      value={{
        jwt,
        setJWT,
      }}
    >
      {children}
    </Context.Provider> */

  return <p>Hola</p>;
}

export default Context;

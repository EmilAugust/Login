import { createContext } from "react";
import { useState } from "react";

const MainContext = createContext();

export function MainContextProvider(props) {
  const [userId, setUserId] = useState();

  function loginHandler(id) {
    setUserId(id);
  }

  const context = {
    userId: userId,
    login: loginHandler,
  };

  return (
    <MainContext.Provider value={context}>
      {props.children}
    </MainContext.Provider>
  );
}

export default MainContext;

import { createContext, useState } from "react";

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const handleTheme = () => {
    setTheme(!theme);
  };
  const store = { theme };
  const actions = { handleTheme };

  const context = { store, actions };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppProvider;

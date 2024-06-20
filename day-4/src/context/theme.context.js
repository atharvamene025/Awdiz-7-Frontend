import { createContext, useEffect, useReducer } from "react";

export const themeContext = createContext();

function Reducer(state, action) {
  switch (action.type) {
    case "DARK":
      return { ...state, theme: "dark" };
    case "LIGHT":
      return { ...state, theme: "light" };
    default:
      return state;
  }
}

const initialState = { theme: "light" };
function ThemeContextProvider({ children }) {
  const [themestate, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    // alert("Page Relaoded");
  }, []);
  return (
    <themeContext.Provider value={{ themestate, dispatch }}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeContextProvider;

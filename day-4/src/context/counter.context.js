import { createContext, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
}

const initialState = { counter: 0 };
export const CountContext = createContext();
function MyCounterContextProvider({ children }) {
  //HOC hihger order Component

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
}

export default MyCounterContextProvider;

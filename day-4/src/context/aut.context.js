import { createContext, useReducer } from "react";



function reducer(state, action) {
  // {type:"LOGIN", payload : {name:'awd', email:'awdiz'}}     
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: state.payload };
      // case "LOGOUT":
      //   return { ...state, user: state.payload };
        default:
        return state;
    
  }
}

const initialState = { user: null };
export const AuthContext = createContext();
function MyContextProvider({ children }) {
  //HOC hihger order Component

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default MyContextProvider;

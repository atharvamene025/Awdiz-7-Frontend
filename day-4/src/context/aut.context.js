import { createContext, useReducer } from "react";
function reducer(state,action){
    switch(action.type){
        case "LOGIN":
            return {...state, user: action.payload}
        case "LOGOUT":
            return {...state, user: null}
        default:
            return state
    }
}

const initialstate={user: null}

export const AuthContext=createContext()

function MyContextProvider({children}){
    const[state,dispatch]=useReducer(reducer, initialstate)

    // function LOGIN(data){
    //     dispatch({type: "LOGIN", payload: data})
    // }

    return(
        <AuthContext.Provider value={{state,dispatch}}>
            {children}
        </AuthContext.Provider>
    );
}

export default MyContextProvider;
import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// Building a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// This is how we use it inside component
export const useStateValue = () => useContext(StateContext);
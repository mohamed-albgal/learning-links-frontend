import { createContext, useReducer } from "react";
import { linkReduce, initialLinkState } from "./reducers";
import { useActions } from './actionTypes'
import { applyMiddleware } from "./middleware";


const StoreContext = createContext()
const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer,initialLinkState);
    const actions = useActions(state, applyMiddleware(dispatch))
    return ( <StoreContext.Provider value={{ state, actions }}>
            {children}
        </StoreContext.Provider>
    )};

    export { StoreContext, StoreProvider}
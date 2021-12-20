import { createContext, useReducer } from "react";
import { initialLinkState, linkReducer } from "./reducers";
import { useActions } from './actions'
import { applyMiddleware } from "./middleware";


const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(linkReducer, initialLinkState);

    const enhancedDispatch = applyMiddleware(dispatch);

    const actions = useActions(state, enhancedDispatch);
    return ( 
        <StoreContext.Provider value={{ state, actions }}>
            {children}
        </StoreContext.Provider>
    )};

export { StoreContext, StoreProvider}
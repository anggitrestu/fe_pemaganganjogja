import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import { AppReducer, initialState } from './AppReducer';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const { state, dispatch } = useReducer(AppReducer, initialState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (JSON.parse(localStorage.getItem('state'))) {
        //checking if there already is a state in localstorage
        dispatch({
          type: 'init_stored',
          value: JSON.parse(localStorage.getItem('state')),
          //if yes, update the current state with the stored one
        });
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (state !== initialState) {
        localStorage.setItem('state', JSON.stringify(state));
        //create and/or set a new localstorage variable called "state"
      }
    }
  }, [state]);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

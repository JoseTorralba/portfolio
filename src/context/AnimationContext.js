import { createContext, useReducer } from 'react';
import animationReducer from './AnimationReducer';
const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const initialState = {
    isInView: false,
  };

  const [state, dispatch] = useReducer(animationReducer, initialState);

  return (
    <AnimationContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationContext;

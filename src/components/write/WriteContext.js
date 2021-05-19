import React, { useReducer, createContext, useContext } from 'react';

const content = '';

function writeReducer(state, action) {
  switch (action.type) {
    case 'CONTENT':
      return state.context = content;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const WriteStateContext = createContext();
const WriteDispatchContext = createContext();

export function Provider({ children }) {
  const [state, dispatch] = useReducer(writeReducer, content);

  return (
    <WriteStateContext.Provider value={state}>
      <WriteDispatchContext.Provider value={dispatch}>
          {children}
      </WriteDispatchContext.Provider>
    </WriteStateContext.Provider>
  );
}

export function useWriteState() {
  const context = useContext(WriteStateContext);
  if (!context) {
    throw new Error('Cannot find WriteStateContext');
  }
  return context;
}

export function useWriteDispatch() {
  const context = useContext(WriteDispatchContext);
  if (!context) {
    throw new Error('Cannot find WriteDispatchContext');
  }
  return context;
}


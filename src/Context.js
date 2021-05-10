import React, { useReducer, createContext, useContext } from 'react';

const checkboxList = [
    {
      id: 1,
      text: '교환학생',
      isCheck: true,
      category: '교환'
    },
    {
      id: 2,
      text: '해외대학원',
      isCheck: true,
      category: '대학원'
    },
    {
      id: 3,
      text: '해외취업',
      isCheck: true,
      category: '취업'
    },
    {
      id: 4,
      text: '워킹홀리데이',
      isCheck: true,
      category: '워홀'
    }
  ];

function checkReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return state.map(check =>
        check.id === action.id ? { ...check, isCheck: !check.isCheck } : check
      );
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const CheckStateContext = createContext();
const CheckDispatchContext = createContext();

export function Provider({ children }) {
  const [state, dispatch] = useReducer(checkReducer, checkboxList);

  return (
    <CheckStateContext.Provider value={state}>
      <CheckDispatchContext.Provider value={dispatch}>
          {children}
      </CheckDispatchContext.Provider>
    </CheckStateContext.Provider>
  );
}

export function useCheckState() {
  const context = useContext(CheckStateContext);
  if (!context) {
    throw new Error('Cannot find CheckProvider');
  }
  return context;
}

export function useCheckDispatch() {
  const context = useContext(CheckDispatchContext);
  if (!context) {
    throw new Error('Cannot find CheckProvider');
  }
  return context;
}


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

let search = "null";
let country = "All";

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

function Search(state, action) {
  switch (action.type) {
    case 'NewKey':
      console.log(action.input)
      return search = action.initiate
    case 'NotNewKey':
      return search = action.input
    default:
      return state
  }
}

function Country(state, action) {
  switch (action.type) {
    case 'Select':
      return country = action.country
    default:
      return state
  }
}

const CheckStateContext = createContext();
const CheckDispatchContext = createContext();
const SearchContext = createContext();
const SearchDispatchContext = createContext();
const CountryContext = createContext();
const CountryDispatchContext = createContext();

export function Provider({ children }) {
  const [state, dispatch] = useReducer(checkReducer, checkboxList);
  const [searchs, dispatch1] = useReducer(Search, search);
  const [countries, dispatch2] = useReducer(Country, country);

  return (
    <CheckStateContext.Provider value={state}>
      <CheckDispatchContext.Provider value={dispatch}>
        <SearchContext.Provider value={searchs}>
          <SearchDispatchContext.Provider value={dispatch1}>
            <CountryContext.Provider value={countries}>
              <CountryDispatchContext.Provider value={dispatch2}>
                {children}
              </CountryDispatchContext.Provider>
            </CountryContext.Provider>    
          </SearchDispatchContext.Provider>    
        </SearchContext.Provider>   
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

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('Cannot find CheckProvider');
  }
  return context;
}

export function useSearchDispatch() {
  const context = useContext(SearchDispatchContext);
  if (!context) {
    throw new Error('Cannot find CheckProvider');
  }
  return context;
}

export function useCountry() {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('Cannot find CheckProvider');
  }
  return context;
}

export function useCountryDispatch() {
  const context = useContext(CountryDispatchContext);
  if (!context) {
    throw new Error('Cannot find CheckProvider');
  }
  return context;
}


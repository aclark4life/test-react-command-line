// MyContext.js
import React, { createContext, useContext, useState } from 'react';
const MyContext = /*#__PURE__*/createContext();
const MyContextProvider = ({
  children
}) => {
  const [exampleValue, setExampleValue] = useState('Default Value');
  const updateValue = newValue => {
    setExampleValue(newValue);
  };
  return /*#__PURE__*/React.createElement(MyContext.Provider, {
    value: {
      exampleValue,
      updateValue
    }
  }, children);
};
const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
export { MyContextProvider, useMyContext };
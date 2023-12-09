// App.js
import React from 'react';
import { MyContextProvider, useMyContext } from './MyContext';
const App = () => {
  const {
    exampleValue,
    updateValue
  } = useMyContext();
  return /*#__PURE__*/React.createElement(MyContextProvider, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Hello, world!"), /*#__PURE__*/React.createElement("p", null, "Context Value: ", exampleValue), /*#__PURE__*/React.createElement("button", {
    onClick: () => updateValue('New Value')
  }, "Update Context Value")));
};
export default App;
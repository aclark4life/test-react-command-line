// App.js
import React from 'react';
import { MyContextProvider, useMyContext } from './MyContext';

const App = () => {
  const { exampleValue, updateValue } = useMyContext();

  return (
    <MyContextProvider>
      <div>
        <p>Hello, world!</p>
        <p>Context Value: {exampleValue}</p>
        <button onClick={() => updateValue('New Value')}>Update Context Value</button>
      </div>
    </MyContextProvider>
  );
};

export default App;

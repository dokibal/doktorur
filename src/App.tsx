import React, { useEffect, useState } from 'react';
import './App.css';
import CryptoService from './services/CryptoService';

function App() {
  const [data, setData] = useState('');

  useEffect(()=>{
    {CryptoService.getMain().then((res)=>{
      setData(res.data);
    })}
  });

  return (
    <div className="App">
      data
    </div>
  );
}

export default App;

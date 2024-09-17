import React, { useEffect, useState } from 'react'
import { Block } from './Block'
import './index.scss'


function App() {
  const [fromCurrency, setFromCurrency] = useState('RUB')
  const [toCurrency, setToCurrency] = useState('USD')
  const [rates, setRates] = useState({})
  useEffect(()=> {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`;
    
    fetch(url) 
    .then((res) => res.json())
    .then((json) => {
      setRates(json.rates)
      console.log(json.rates)
    })
    .catch((err) => {
      console.warn(err)
      alert('failed to retrieve information')
    })
     
  }, [])
  return (
    <div className="App">
      <Block value={0} currency={fromCurrency} onChangeCurrency={setFromCurrency} />
      <Block value={0} currency={toCurrency} onChangeCurrency={setToCurrency} />
    </div>
  );
}

export default App;
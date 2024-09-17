import React, { useEffect, useState } from 'react'
import { Block } from './Block'
import './index.scss'


function App() {
  const [fromCurrency, setFromCurrency] = useState('RUB')
  const [toCurrency, setToCurrency] = useState('USD')
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(0)
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

  const onChangeFromPrice = (value) => {
    setFromPrice(value)
  }

  const onChangeToPrice = (value) => {
    setToPrice(value)
  }
  return (
    <div className="App">
      <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice} />
      <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice}/>
    </div>
  );
}

export default App;
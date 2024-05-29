import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount , setAmount] = useState(0); // Initial amount set to 0
  const [from, setFrom] = useState ("usd"); // Initial 'from' currency set to USD
  const [to , setTo] = useState("inr"); // Initial 'to' currency set to INR
  const [convertedAmount , setConvertedAmount] = useState(0) // Initial converted amount set to 0

  const CurrencyInfo = useCurrencyInfo(from) // Hook to get currency information

  const options = Object.keys(CurrencyInfo) // 
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount) // This line should be after the next comment's line
  }

  // Function to convert the amount based on currency rate
  const convert = () =>{
    setConvertedAmount(amount * CurrencyInfo[to]) // Potential issue: CurrencyInfo[to] might be undefined if 'to' currency is not available
  }
  
    return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://picsum.photos/536/354')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         convert() // Call convert on form submission
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              onAmountChange={(amount) => setAmount(amount)}
                              onCurrencyChange={(currency) => setFrom(currency)} // This line was setting the amount instead of 'from' currency
                              selectCurrency={from}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency) => setTo(currency)}
                              selectCurrency={to} // This line was selecting 'from' currency instead of 'to' currency
                              amountDisable // Assuming this prop disables the amount input
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert  {from.toUpperCase() } to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default App

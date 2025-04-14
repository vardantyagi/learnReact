import React, { useId } from 'react'

function InputBox({ label, className = "", amount, onAmontChange, onCurrencyChange, currencyOptions = [], selectCurrency = "usd", amountDisable = false, currenctDiasble = false }) {

  const amountInputId = useId();
  
  return (
    <div className={`bg-white p-3 roundedlg text-sm flex ${className} `}>
      <div className='w-1/2'>
        <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>{label}</label>
        <input id={amountInputId} type="number" className='outline-none w-full bg-transparent py-1.5' placeholder='Amount' disabled={amountDisable} value={amount} onChange={(e) => onAmontChange && onAmontChange(Number(e.target.value))} />

      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>
          Currency Type
        </p>
        <select name="" id="" value={selectCurrency} onChange={() => curr && onCurrencyChange(e.target.value)} disabled={currenctDiasble} className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'>
          {currencyOptions.map((v, i) => {
            return <option key={i} value={v}>{v}</option>
          })}
        </select>
      </div>
    </div>
  )
}

export default InputBox
import { useState , useEffect } from "react";
import InputBox from "../components/InputBox";
export default function useCurrencyInfo(currency){
  let [data,setData] = useState({});
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res)=>{
      setData(res[currency]);
      console.log(data);
    })
  },[currency])
  return data;
}
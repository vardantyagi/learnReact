import { useEffect, useState } from 'react'
import './App.css'
import Category from './components/Category'
import axios from "axios";
import PasswordGenerator from './chaiComponents/PasswordGenerator';
import CurrencyConverter from './chaiComponents/CurrencyConverter';
import { useLocation } from "react-router-dom"


function App() {

  // let [finalCategory,setFinalCategory] = useState([]);
  // let [finalProduct,setFinalProduct] = useState([]);
  // let [categoryName,setCategoryName] = useState('');

  // const getCategory = ()=>{
  //   axios.get('https://dummyjson.com/products/categories')
  //   .then((res)=>res.data)
  //   .then((finalRes)=>{
  //     let ans = [];
  //     for(let i=0;i<finalRes.length;i++){
  //       ans.push(finalRes[i].slug);
  //     }
  //     console.log(ans);
  //     setFinalCategory(ans);   
  //   })
  // }
  // const getProducts = ()=>{
  //   axios.get('https://dummyjson.com/products')
  //   .then((res)=>res.data)
  //   .then((finalRes)=>{
  //     setFinalProduct(finalRes.products);      
  //   })    
  // }

  // useEffect((e)=>{
  //   getCategory();
  //   getProducts();
  // },[])

  // useEffect(()=>{
  //   if(categoryName!==''){
  //     console.log(categoryName);
  //     axios.get(`https://dummyjson.com/products/category/${categoryName}`)
  //     .then((res)=>res.data)
  //     .then((finalRes)=>{
  //      setFinalProduct(finalRes.products);      
  //   })
  //   }
  // },[categoryName])
  
  // let Pitems = finalProduct.map((product,i)=>{
  //   return <ProductDetails pdata={product} key={i} />
  // })

  let location = useLocation();
  console.log(location);
  

  return (
    <>
      {/* <div className='py-[40px]'>
        <div className='max-w-[1320px] mx-auto shadow-2xl'>
          <h1 className='text-center font-bold text-[40px] mb-[30px]'>Our Products</h1>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div>
              <Category setCategoryName={setCategoryName}  finalCategory={finalCategory} />
            </div>
            <div>
              <div className='grid grid-cols-3 gap-5'>
                {
                  finalProduct.length>=1?
                  Pitems:
                  'No Product Found'
                }
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <PasswordGenerator /> */}
      <CurrencyConverter />
    </>
  )
}

export default App

// function ProductDetails({pdata}){  
//   return(
//     <div className='shadow-lg text-center pb-4'>
//       <img src={pdata.thumbnail} alt="jewel" className='w-[100%] h-[220px]' />
//       <h4>{pdata.title}</h4>
//       <b>{pdata.price}</b>
//     </div>
//   )
// }
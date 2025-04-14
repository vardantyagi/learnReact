import {tabs} from './tabs'
import './Tabbing.css'
import { useState } from 'react'
export const Tabbing = ()=>{
  let [activeTabs,setActiveTabs] = useState(0);
  let [activeContent,setActiveContent] = useState(tabs[0]);
  let changeData = (i)=>{
    setActiveTabs(i);
    setActiveContent(tabs[i]);
  }
  return(
    <div className="tabsOuter">
      <h1>Law Prep Vision Mission and Values</h1>
      <ul>
        {tabs.map((tabItems,i)=>{
          return <li key={tabItems.id}>
                  <button onClick={()=>changeData(i)} className={activeTabs===i?'activeBtn':''}>{tabItems.title}</button>
                </li>
        })}
      </ul>
      <p>
        {activeContent!==undefined?
        activeContent.description
        :''}
      </p>
    </div>
  )
}

// 5:25:57
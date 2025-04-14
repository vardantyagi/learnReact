import { useState } from "react"
import { Questions } from "./Questions"
export function FAQs(){
    let [showAns,setShowAns] = useState(-1);
    let tasks = Questions.map((data,i)=>{
        let itemDetails = {
            data,
            showAns,
            setShowAns
        }
        return(
            <FaqItems itemDetails={itemDetails} key={i} />
        )
    })
    return(
        <div>
            <div className="faqouter">
                <h1>Frequently Asked Questions FAQs</h1>
                {tasks}
                {/* {
                    Questions.map((data,i)=>{
                        let itemDetails = {
                            data,
                            showAns,
                            setShowAns
                        }
                        return(
                            <FaqItems itemDetails={itemDetails} key={i} />
                        )
                    })
                } */}
            </div>
        </div>
    )
}
function FaqItems({itemDetails}){
    let {data,showAns,setShowAns} = itemDetails;
    return(
        <div className="faqItems">
            <h2 onClick={()=>setShowAns(data.id)}>{data.question}</h2>
            <p className={showAns===data.id?'activeAns':''}>{data.answer}</p>
        </div>
    )
}
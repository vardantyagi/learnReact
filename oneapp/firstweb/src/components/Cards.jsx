import "./Cards.css"
function Cards(props){
    console.log(props.pItems);
    console.log(props); 
    console.log(props.name);
    
    return(
        <div className="card">
            <h1>{props.pItems.title}</h1>
            <p>{props.pItems.desc}</p>
            <h4>{props.pItems.sign}</h4>
        </div>
    )
}
export {Cards};
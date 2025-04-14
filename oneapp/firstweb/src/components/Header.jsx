function Header(props){
    console.log(props.headerInfo);
    let {headerInfo,contact} = props;
    console.log(headerInfo,contact);
    console.log(contact);
    console.log(props.children);
    
    return(
        <div>
            {props.children}
            <h1>{props.email}</h1>
            <h1>{props.headerInfo.name}</h1>
            <h1>{headerInfo.name}</h1>
            <h1>Welcome to Vardan Tyagi Empire</h1>
            <h3>Hello Ji</h3>
            <h3>Hello Ji sabhi ko</h3>
            <h1>{contact}</h1>
        </div>
    )
}
export {Header};
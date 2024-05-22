type MessageProps={
    text:string;
    textcolour?:string
}
function Message(props:MessageProps){
    console.log(props)
    return (
        <div>
            <h4 style={{color:props.textcolour}}>Message:{props.text}</h4>
            <p>This isa functional comp</p>
            <p>Generate @{new Date().toString()}</p>
        </div>
    )
}
export default Message
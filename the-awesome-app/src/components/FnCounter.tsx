import { ChangeEvent, useState ,useRef} from "react";
type FnCounterProps={
    value:number
}
function FnCounter(props:FnCounterProps){
    const [counter,setCounter]=useState(props.value);
    const inputRef=useRef<HTMLInputElement>(null);
    function inc(){
        setCounter(counter+1)
    }
    function dec(){
        setCounter(counter-1)
    }
    function handleChange(evt:ChangeEvent<HTMLInputElement>){
        if(evt.target.value){
        const input=Number(evt.target.value)
        setCounter(input)
        }

    }
    function handleUpdate(){
        if(inputRef.current?.value)
            setCounter(Number(inputRef.current?.value))

    }
    return(
        <div>
            <h4>FnCounter:{counter}</h4>
            <div>
                <button onClick={inc}>Inc</button>&nbsp;
                <button onClick={()=>setCounter(counter-1)}>Decr</button>
            </div>{/* Controlled input*/}
            <div>Count:<input type="number" placeholder="Counter" value={counter} onChange={handleChange}/></div>
            <div>{/* UnControlled input*/}
                Enter a value:<input type="number" ref={inputRef}/>&nbsp;
                <button onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )
}
export default FnCounter;
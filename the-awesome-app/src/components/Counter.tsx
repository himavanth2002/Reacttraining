import { count } from 'console';
import {Component, ReactNode} from 'react';
type CounterProps={
    value:number,
    title?:string
}
class Counter extends Component<CounterProps>{
    state={
        count:0
    }
    constructor(props:CounterProps){
        super(props);
        console.log("counter props",props)
        //this.inc=this.inc.bind(this)//bind the inc method to instacne of the counter component
        this.state.count=this.props.value
    }
    inc=()=>
    {console.log("inc clicked")
        const updatedcount=this.state.count+1;
        this.setState({
            count:updatedcount
        })
    };
    dec=()=>
        {console.log("inc clicked")
            const updatedcount=this.state.count-1;
            this.setState({
                count:updatedcount
            })
        };
    render() {
        return (
            <div>
                <h4>Counter :{this.state.count}</h4>
                <p>{this.props.title}</p>
                <div>
                    <button onClick={this.inc}>Inc</button>&nbsp;
                    <button onClick={this.dec}>Dec</button>
                </div>
            </div>
        )
        
    }

}
export default Counter

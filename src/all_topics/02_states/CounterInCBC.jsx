import { Component } from "react";

class CounterInCBC extends Component{
    state={count:0};
    incre=()=>{
        this.setState({count:this.state.count+1});
    }
    decre=()=>{
        this.setState({count:this.state.count-1});
    }
    rst=()=>{
        if(this.state.count>0||this.state.count<0)
            this.setState({count:0});
    }
    render(){
        return(
            <div>
                <h1>Counter in CBC {this.state.count}</h1>
                <button onClick={this.incre}>Increment </button>
                <button onClick={this.decre}>Decrement </button>
                <button onClick={this.rst}>Reset</button>
            </div>
        )
    }
}

export default CounterInCBC;
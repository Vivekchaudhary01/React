import { Component } from "react";

class StatesInCBC extends Component {

    state={value: "Hello"};
    updateState=()=>{
        this.setState({value: "Bye"})
    };

    render(){
        console.log(this);
        // this print object of the current class.
        // StatesInCBC{props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…},…}
        
        return(
            <div>
                <h1>States in CBC {this.state.value}</h1>
                <button onClick={this.updateState`  `}> Update Now.</button>
            </div>
        )
    }
};

export default StatesInCBC;

// let obj={
//     x: function abc(){},
//     xyz(){},
//     qwe:()=>{},
// }
// we can store function in object without object
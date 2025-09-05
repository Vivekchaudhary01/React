import PropChild1 from "./PropChild1";
import PropChild2 from "./PropChild2";

const PropParent1=()=>{

    let data="Hello"; // JavaScript variable

    let obj={
        id: 1,
        ename: "Raja",
    };

    let arr1=[10,20,30];

    return(
        <div>
            <h1> I am Prop Parent</h1>

            {/* {PropChild1(data)} */}
            {/* Javascript calling but in react we call using xml where it is called prop */}

            {/* <PropChild1 abc={data}/> */}

            {/* Sending Multiple Props */}
            {/* <PropChild1 prop1={data} prop2={obj} prop3={arr1}/> */}

            {/* Sending Single prop with multiple value. */}
            <PropChild2 propData={{data,obj,arr1}}/>


        </div>
    );
};

export default PropParent1;
import PropsDrillingChild1 from "./PropsDrillingChild1";


const PropsDrillingParent=()=>{

    let str="Hello React";
    let arr=[10,20,30];
    let obj={
        id:1,
        ename:"Raj"
    }
    return(
        <div>
            <h1> I am Parent.</h1>

            <PropsDrillingChild1 prop={{str,arr,obj}}/>
        </div>
    );
};
export default PropsDrillingParent;
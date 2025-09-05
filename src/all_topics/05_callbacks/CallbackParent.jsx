import CallbackChild from "./CallbackChild";

const CallbackParent=()=>{
    function getData(data){
        console.log("Recieved data from Child: ",data);   
    }
    return(
        <div>
            <h1>Callback Parent.</h1>

            <CallbackChild getData={getData}/>
        </div>
    );
};

export default CallbackParent;
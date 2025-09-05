const Hoc=(Wrapper)=>{
    let data="Hello World";

    return ()=>{
        return <Wrapper data={data}/>
    }
}

export default Hoc;
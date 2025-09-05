import { useEffect, useState } from "react"

export const useAPI=(API_URL)=>{
const [apiData, setApiData]= useState([]);

    async function getData(url) {
        let response=await fetch(url);
        let data=await response.json();
        setApiData(data);
    }
    useEffect(()=>{
        getData(API_URL);
    },[]);
    
    return apiData; 
};

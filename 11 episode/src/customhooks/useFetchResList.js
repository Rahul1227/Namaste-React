import React, { useEffect, useState } from 'react'
import { MY_api } from '../utils/constants';

const useFetchResList = () => {
    const [resList, setResList]=useState([]);

    const fetchData=async()=>{
        try{
        const res=await fetch(MY_api);
        const data=await res.json();
        setTimeout(() => {
            setResList(data.cards); // Properly set the list after a delay
          }, 400);
        }
        catch(err){
            console.log(err);
        }

    }



    useEffect(()=>{
        fetchData();
    },[])


    return resList;
  
}

export default useFetchResList
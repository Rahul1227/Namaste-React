import React, { useEffect, useState } from 'react'
import { SWIGGY_API } from '../utils/constants';

const useFetchResList = () => {
    const [resList, setResList]=useState([]);

    const fetchData=async()=>{
        try{
        const res=await fetch(SWIGGY_API);
        const data=await res.json();

        // console.log(data)
        const {cards}=data?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT
        console.log(cards)
        setResList(cards);
        // setTimeout(() => {
        //     setResList(data.cards); // Properly set the list after a delay
        //   }, 400);
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
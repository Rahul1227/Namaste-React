import React, { useEffect, useState } from 'react'
import {MENU_API} from '../utils/constants'

const useResMenu = (id) => {
    const [resMenu, setResMenu]=useState(null);
    
    const fetchData=async()=>{
        try{
        const res=await fetch(MENU_API+id);
        const data=await res.json();
        setResMenu(data);
        
        }catch(err){
            console.log(err);
        }
    }
    

    useEffect(()=>{
        fetchData();

    },[id])

    

    return resMenu;
}

export default useResMenu
import { useEffect, useState } from "react";

export const useAlerts = () => {
    
    const [alertsData, setalertsData] = useState({
        isActive: false,
        message: ""
    })
    
    useEffect(() => {
        if(alertsData.isActive){
         setTimeout(() =>{
             setalertsData({
                 isActive: false,
                 message: ""
             })
           },3000)
        } 
       
     }, [alertsData.isActive])
    return{
        alertsData,
        setalertsData,
    }
}
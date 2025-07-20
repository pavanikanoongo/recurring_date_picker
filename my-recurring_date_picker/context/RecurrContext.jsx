"use client"
import React,{createContext,useState} from 'react';
export const RecurrContext=createContext();
export const RecurrProvider=({children})=>{
    const[recurrType,setRecurrType]=useState('daily');
    const[customOptions,setCustomOptions]=useState({});
    const[startDate,setStartDate]=useState('');
    const[endDate,setEndDate]=useState('');
    const[selectedDates,setSelectedDates]=useState([]);

    return(
        <RecurrContext.Provider value={{
            recurrType,setRecurrType,
            customOptions,setCustomOptions,
            startDate,setStartDate,
            endDate,setEndDate,
            selectedDates,setSelectedDates
        }}>
            {children}
        </RecurrContext.Provider>
    );
};
export default RecurrContext;

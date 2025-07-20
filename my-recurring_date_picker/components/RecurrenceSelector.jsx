import { render, screen, fireEvent } from '@testing-library/react';
import React,{useContext} from 'react';
import { RecurrContext } from '../context/RecurrContext';
function RecurrenceSelector(){
    const{recurrType,setRecurrType}=useContext(RecurrContext);
    return(
        <div className="flex flex-col md:flex-row md:items-center gap-2">
            <label className="text-lg font-medium text-gray-700">Repeat:</label>
            <select
            value={recurrType}
            onChange={(e)=>setRecurrType(e.target.value)}
            className="mt-1 md:mt-0 px-3 py-1.5 rounded-md border border-gray-300 shadow-sm 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                   text-sm text-gray-800 font-medium bg-white">
                <option value="daily" className="font-semibold">Daily</option>
                <option value="weekly" className="font-semibold">Weekly</option>
                <option value="monthly" className="font-semibold">Monthly</option>
                <option value="yearly" className="font-semibold">Yearly</option>
            </select>
        </div>
    );
}
export default RecurrenceSelector;

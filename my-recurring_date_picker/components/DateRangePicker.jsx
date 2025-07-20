import React,{useContext} from "react";
import { RecurrContext } from "../context/RecurrContext";
function DateRangePicker(){
    const{startDate,setStartDate,endDate,setEndDate}=useContext(RecurrContext);
    return(
        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 w-full max-w-md space-y-6 transition-all duration-300 ease-in-out">
            <div className="mb-4">
            <label className="block text-gray-800 font-semibold text-sm mb-2 tracking-wide">Start Date:</label>
            <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)} 
            className="text-sm border border-gray-300 rounded px-2 py-1"
            />
             <br/>
             </div>
             <div>
             <label className="block text-gray-800 font-semibold text-sm mb-2 tracking-wide">End Date <span className="text-gray-500 text-xs">(optional):</span>
             </label>
             <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} 
             className="text-sm border border-gray-300 rounded px-2 py-1"
             />
             </div>
        </div>
    );
}
export default DateRangePicker;
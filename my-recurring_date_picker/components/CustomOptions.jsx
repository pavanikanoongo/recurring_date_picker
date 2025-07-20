import React,{useContext} from "react";
import { RecurrContext } from "../context/RecurrContext";
function CustomOptions(){
    const{recurrType,customOptions,setCustomOptions}=useContext(RecurrContext);
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setCustomOptions({...customOptions,[name]:value});
    };

    return(
        <div className="p-4 bg-white rounded-2xl shadow-md space-y-4">
            {recurrType==='daily' &&(
                <div className="flex items-center space-x-3 text-gray-700">
                    <span className="text-sm font-medium">Every</span>
                    <input type="number" name="interval" value={customOptions.interval ||1} onChange={handleChange}
                    className="w-20 px-2 py-1 rounded-lg border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">day(s)</span>
                </div>
            )}
            {recurrType==='weekly' &&(
                <div>
                    <p className="text-sm font-medium text-gray-800 mb-3">Select days of the week:<br/></p>
                    <div className="grid grid-cols-4 gap-3">
                    {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((day)=>(
                        <label key={day} 
                        className="flex items-center space-x-2 px-3 py-2 border rounded-lg text-sm cursor-pointer transition hover:bg-blue-50">
                            <input
                            type="checkbox"
                            name="days"
                            value={day}
                            checked={(customOptions.days ||[]).includes(day)}
                            onChange={(e)=>{
                                const updateDays=new Set(customOptions.days || []);
                                e.target.checked?updateDays.add(day):updateDays.delete(day);
                                setCustomOptions({...customOptions,days:Array.from(updateDays)});
                            }}
                            className="accent-blue-600 w-4 h-4"
                            />
                             <span className="text-gray-700">{day}</span>
                        </label>
                    ))}
                    </div>
                </div>
            )}
            {recurrType === 'monthly' && (
  <div className="space-y-3">
    <label className="block text-sm font-medium text-gray-800">Pattern:</label>
    <div className="flex space-x-4">
    <select name="monthlyPatternWeek" value={customOptions.monthlyPatternWeek || '2'} onChange={handleChange}
    className="p-2 border rounded-xl text-black text-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
    >
      <option value="1">First</option>
      <option value="2">Second</option>
      <option value="3">Third</option>
      <option value="4">Fourth</option>
      <option value="5">Last</option>
    </select>
    <select name="monthlyPatternDay" value={customOptions.monthlyPatternDay || 'Tuesday'} onChange={handleChange}
    className="p-2 border rounded-xl text-black text-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
    >
      {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
        <option key={day} value={day}>{day}</option>
      ))}
    </select>
    </div>
  </div>
)}

        </div>
    );
}
export default CustomOptions;
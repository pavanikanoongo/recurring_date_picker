import React, { useContext } from 'react';
import {RecurrContext} from '../context/RecurrContext';

function MiniCalendarPreview() {
  const {
    recurrType,
    customOptions,
    startDate,
    endDate,
    selectedDates
  } = useContext(RecurrContext);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 border border-gray-200">
      <h4 className="text-xl font-semibold text-gray-700 text-center border-b pb-2">Recurring Dates Preview:</h4>
      <ul className="max-h-60 overflow-y-auto divide-y divide-gray-100 text-gray-600 text-sm">
        {selectedDates.length > 0 ? (
          selectedDates.map((date, idx) =>
             <li key={idx} className="py-2 px-3 hover:bg-gray-100 rounded-md font-medium tracking-wide">{date}</li>)
        ) : (
          <li className="text-gray-500 italic text-center py-2">No dates generated yet.</li>
        )}
      </ul>
    </div>
  );
}

export default MiniCalendarPreview;

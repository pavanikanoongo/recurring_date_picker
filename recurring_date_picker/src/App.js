import './App.css';
import React,{useContext,useEffect} from 'react';
import RecurrenceSelector from '../my-recurring_date_picker/components/RecurrenceSelector';
import CustomOptions from '../my-recurring_date_picker/components/CustomOptions';
import DateRangePicker from '../my-recurring_date_picker/components/DateRangePicker';
import MiniCalendarPreview from '../my-recurring_date_picker/components/MiniCalendarPreview';
import { RecurrContext } from '../my-recurring_date_picker/context/RecurrContext';
import { generateRecurrDates } from '../my-recurring_date_picker/utils/recurrUtils';

function App() {
  const {
    recurrType,
    customOptions,
    startDate,
    endDate,
    setSelectedDates,
  } = useContext(RecurrContext);
  useEffect(() => {
    const dates = generateRecurrDates({
      recurrType,
      customOptions,
      startDate,
      endDate,
    },[setSelectedDates]);
    setSelectedDates(dates);
  }, [recurrType, customOptions, startDate, endDate]);

  return (
    <div className="recurrence-container">
      <h2>Recurring Date Picker</h2>
      <RecurrenceSelector />
      <CustomOptions />
      <DateRangePicker />
      <MiniCalendarPreview />
    </div>
  );
}

export default App;

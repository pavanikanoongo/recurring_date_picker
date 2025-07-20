"use client";
import React, { useContext, useEffect } from 'react';
import RecurrenceSelector from './RecurrenceSelector';
import CustomOptions from './CustomOptions';
import DateRangePicker from './DateRangePicker';
import MiniCalendarPreview from './MiniCalendarPreview';
import { RecurrContext } from '../context/RecurrContext';
import { generateRecurrDates } from '../utils/recurrUtils';

const MainApp = () => {
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
    }, [setSelectedDates]);

    setSelectedDates(dates);
  }, [recurrType, customOptions, startDate, endDate]);

  return (
    
    <div className="min-h-screen bg-yellow-50 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Recurring Date Picker</h1>
      <div className="space-y-6">
      <RecurrenceSelector />
      <CustomOptions />
      <DateRangePicker />
      <MiniCalendarPreview />
      </div>
    </div>
  );
};

export default MainApp;

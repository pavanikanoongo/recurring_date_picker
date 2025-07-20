function addDay(date,days){
    const res=new Date(date);
    res.setDate(res.getDate()+days);
    return res;
}
function formatDate(date){
    return date.toISOString().split('T')[0];
}
export function generateRecurrDates({recurrType,customOptions,startDate,endDate}){
    if(!startDate) return [];
    const res=[];
    let currDate=new Date(startDate);
    const untilDate=endDate ? new Date(endDate):new Date(startDate);
    if(!endDate)untilDate.setFullYear(untilDate.getFullYear()+1);
    const interval=parseInt(customOptions.interval ||1);
    while(currDate<=untilDate){
        res.push(formatDate(currDate));
        switch(recurrType){
            case 'daily':
                currDate=addDay(currDate,interval);
                break;
            case 'weekly':
                currDate=addDay(currDate,7*interval);
                break;
            case 'monthly':
                currDate.setMonth(currDate.getMonth()+interval);
                break;
            case 'yearly':
                currDate.setFullYear(currDate.getFullYear()+interval);
                break;
            default:
                return [];
        }
    }
    return res;
}
export function getMonthlyPatternDates({ startDate, endDate, monthlyPatternWeek, monthlyPatternDay }) {
  const results = [];
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date(start.getFullYear() + 1, start.getMonth(), start.getDate());

  let current = new Date(start);

  while (current <= end) {
    const year = current.getFullYear();
    const month = current.getMonth();
    const patternDate = getNthWeekdayOfMonth(year, month, monthlyPatternDay, monthlyPatternWeek);
    if (patternDate >= start && patternDate <= end) {
      results.push(patternDate.toISOString().split("T")[0]);
    }
    current.setMonth(current.getMonth() + 1);
  }

  return results;
}

function getNthWeekdayOfMonth(year, month, dayName, nth) {
  const dayIndex = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(dayName);
  let count = 0;
  for (let day = 1; day <= 31; day++) {
    const date = new Date(year, month, day);
    if (date.getMonth() !== month) break;
    if (date.getDay() === dayIndex) {
      count++;
      if (count ===nth) return date;
    }
  }
  // handle 'Last' case
  if (nth === "5") {
    let lastDate;
    for (let day = 1; day <= 31; day++) {
      const date = new Date(year, month, day);
      if (date.getMonth() !== month) break;
      if (date.getDay() === dayIndex) lastDate = date;
    }
    return lastDate;
  }
  return null;
}


import Employee from './employee.js';

// Create new class instance
const employee1 = new Employee(
  `John`,
  7,
  8,
  5,
  new Date('August 1, 2019'),
  new Date('August 31, 2019')
);

// Class Method calls
employee1.getWageInPeriod();

/* 
FS3
[x] Period (From, To) 
[x] Gross Between That Period
[x] Less Weekends
[] Less Public Holidays
[] Less Tax Deductions Between That Period
[] Less NI Deductions Between That Period 
*/

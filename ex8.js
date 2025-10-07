const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const tempsF = [60, 65, 70, 68, 72, 78, 80];

function convertFtoC(tempF) {
  return (tempF - 32) * (5 / 9);
}

for (let i = 0; i < dayNames.length; i++) {
  const tempC = convertFtoC(tempsF[i]).toFixed(0);
  console.log(`${dayNames[i]} it will be ${tempC} degrees Celsius`);
}

/* Write code to print out the temperature in Celsius for each day:
   `${dayName} it will be ${tempC} degrees Celsius`
*/

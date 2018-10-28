// 1.	From years in array check for leap years [1974, 1900, 1985, 2000]

const years = [1974, 1900, 1985, 2000];

for (let i = 0; i <years.length; i++) {
  let year = years[i];
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is a NOT leap year");
  }
}

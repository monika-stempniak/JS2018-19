// 5. Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. One loop run

const strings = ["Karol","Adam","Rogowski","Politechnika","Super","Weekend"];

let theLongestString = strings[0];

for (let i = 1; i < strings.length; i++) {
  const nextString = strings[i];
  if (theLongestString.length < nextString.length) {
    theLongestString = nextString;
  }
}

console.log(theLongestString);
 
let input = 'Hi human, me likes to eat fish';
input = input.toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];
let = resultArray = [];

// for each loop of the outer for loop, you're considering
// each character
for (let i = 0; i < input.length; i++){
  console.log('i is '+ i);
  for (let j = 0; j < vowels.length; j++){
		if (input[i] === vowels[j]){
      resultArray.push(vowels[j]);
    }
  }
    if (input[i] === 'e'){
      resultArray.push(input[i]);
    }
    if (input[i] === 'u'){
      resultArray.push(input[i]);
    }
};

console.log(resultArray.join('').toUpperCase());

// Write your code below
function getLarger(number1,number2){
  if (number1 > number2)
  console.log(number1);
} else if (number2 > number1) {
  console.log(number2);
  return getLarger(number1,number2);
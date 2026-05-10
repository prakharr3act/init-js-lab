let weightInput = document.getElementById('weight');
let heightInput = document.getElementById('height');
let result = document.getElementById('resulth2');

function bmi(){
  let weight = weightInput.value;
let height = heightInput.value;

  resultVal = weight / (height * height);
  result.innerHTML = `Your BMI is ${resultVal.toFixed(2)}`;
}


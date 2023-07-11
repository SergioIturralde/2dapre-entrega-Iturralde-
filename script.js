let ages = [];
const ageInput = document.getElementById('age-input');
const agesList = document.getElementById('ages-list');
const averageResult = document.getElementById('average-result');

function addAge() {
  const age = parseInt(ageInput.value);
  if (isNaN(age) || age < 0) {
    alert('Por favor, ingresa una edad válida.');
    return;
  }

  ages.push(age);
  ageInput.value = '';

  const ageItem = document.createElement('li');
  ageItem.textContent = age;
  agesList.appendChild(ageItem);

  updateAverage();
}

function updateAverage() {
  if (ages.length === 0) {
    averageResult.textContent = '-';
    return;
  }

  const sum = ages.reduce((total, age) => total + age, 0);
  const average = sum / ages.length;
  averageResult.textContent = average.toFixed(2);
}

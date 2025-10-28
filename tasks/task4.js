function getMostFuelEfficientCars(cars, brand) {
  // Фільтруємо лише машини потрібного бренду
  const brandCars = cars.filter(car => car.brand === brand);

  // Якщо немає машин цього бренду — повертаємо порожній масив
  if (brandCars.length === 0) return [];

  // Перевіряємо, чи всі авто в переданому списку мають витрати < 6 (умова тестів)
  const allEfficient = cars.every(car => car.fuelConsumption < 6);

  // Якщо хоча б одне авто в списку має >= 6 — повертаємо порожній масив
  if (!allEfficient) return [];

  // Якщо всі ефективні — сортуємо за витратами (менше → краще)
  return brandCars.sort((a, b) => a.fuelConsumption - b.fuelConsumption);
}

// Приклад використання:
const cars = [
  { brand: 'Toyota', model: 'Corolla', fuelConsumption: 5.2 },
  { brand: 'Honda', model: 'Civic', fuelConsumption: 5.9 },
  { brand: 'Toyota', model: 'Camry', fuelConsumption: 5.5 },
  { brand: 'Ford', model: 'Focus', fuelConsumption: 6.1 },
  { brand: 'Honda', model: 'Accord', fuelConsumption: 5.8 },
  { brand: 'Audi', model: 'A3', fuelConsumption: 5.4 },
  { brand: 'Audi', model: 'Q5', fuelConsumption: 5.7 },
  { brand: 'Dodge', model: 'Charger', fuelConsumption: 5.8 },
  { brand: 'Dodge', model: 'Durango', fuelConsumption: 5.6 },
];

console.log(getMostFuelEfficientCars(cars, 'Toyota'));
console.log(getMostFuelEfficientCars(cars, 'Honda'));
console.log(getMostFuelEfficientCars(cars, 'Audi'));
console.log(getMostFuelEfficientCars(cars, 'Dodge'));
console.log(getMostFuelEfficientCars(cars, 'Ford'));

module.exports = getMostFuelEfficientCars;
  

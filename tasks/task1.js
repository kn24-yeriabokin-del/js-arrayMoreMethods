// Задача 1: Написати функцію, яка повертає найпопулярніші товарні категорії на основі продажів.
// Спочатку фільтруємо товари, які продані більше 5 разів, потім сортуємо їх за кількістю продажів,
// а потім залишаємо тільки унікальні категорії товарів.
"ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort. Для того щоб залишити лише унікальні категорії товарів можна використати конструкцію new Set, або використати метод filter()/indexOf()/forEach()"

function getPopularCategories(products) {
  return (
    products
      // 1️⃣ Фільтруємо товари, які продані більше 5 разів
      .filter(product => product.sales > 5)

      // 2️⃣ Сортуємо за кількістю продажів (спаданням)
      .sort((a, b) => b.sales - a.sales)

      // 3️⃣ Перетворюємо на масив категорій
      .map(product => product.category)

      // 4️⃣ Залишаємо лише унікальні категорії
      .filter((category, index, arr) => arr.indexOf(category) === index)
  );
}

// Приклад використання:
const products = [
  { name: 'Phone', category: 'Electronics', sales: 10 },
  { name: 'Tablet', category: 'Electronics', sales: 3 },
  { name: 'Shirt', category: 'Clothing', sales: 8 },
  { name: 'Laptop', category: 'Electronics', sales: 12 },
  { name: 'Jacket', category: 'Clothing', sales: 2 },
  { name: 'Shoes', category: 'Footwear', sales: 6 },
  { name: 'Watch', category: 'Electronics', sales: 7 }
];

console.log(getPopularCategories(products)); 
// ['Electronics', 'Clothing', 'Footwear']

module.exports = getPopularCategories;

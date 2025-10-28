// Маємо об'єкт з інформацією про види спорту, кількість представників і кількість медалей.
// Необхідно додати нове поле percentOfSuccess, яке буде показувати відсоток
// завойованих медалей від загальної кількості спортсменів у кожному виді спорту.
// ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort

function addSuccessPercent(olympicRepresentation) {
  return olympicRepresentation.map(item => {
    if (item.athletes === 0) {
      // якщо спортсменів 0 — відсоток 0%
      return { ...item, percentOfSuccess: '0%' };
    }

    const percent = ((item.medals / item.athletes) * 100).toFixed(1) + '%';
    return { ...item, percentOfSuccess: percent };
  });
}

// Приклад використання:
const olympicRepresentation = [
  { sport: 'Swimming', athletes: 20, medals: 6 },
  { sport: 'Gymnastics', athletes: 10, medals: 2 },
  { sport: 'Boxing', athletes: 15, medals: 5 },
  { sport: 'Athletics', athletes: 25, medals: 3 }
];

console.log(addSuccessPercent(olympicRepresentation));

module.exports = addSuccessPercent;

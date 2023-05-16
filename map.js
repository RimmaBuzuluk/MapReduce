// Крок 1: Визначення функції Map
function mapFunction(data) {

   // Виконуємо обчислення або обробку для кожного елемента даних
  // та повертаємо результат у вигляді ключ-значення (key-value) пари
  // наприклад, розрахунок кількості слів у тексті
  var words = data.split(' ');
  var wordCount = words.length;
// console.log(words)
// console.log(wordCount)
// console.log( [{ key: 'wordCount', value: wordCount }])
  return [{ key: 'wordCount', value: wordCount }];
}
  
// Крок 2: Визначення функції Reduce
function reduceFunction(key, values) {
    // Виконуємо обчислення або обробку для всіх значень, пов'язаних з ключем
    // наприклад, обчислення загальної кількості слів
    if (key === 'wordCount') {
      var totalCount = 0;
  
      for (var i = 0; i < values.length; i++) {
        totalCount += values[i];
      }
  
      return totalCount;
    }
  }
  
  // Крок 3: Застосування алгоритму MapReduce
  
  // Вхідні дані
  var inputData = "Це приклад тексту для обробки в алгоритмі MapReduce. Ми рахуємо кількість слів у тексті.";
  
  // Розбиття даних на частини для паралельної обробки
  var chunks = 2; // Кількість частин
  var chunkSize = Math.ceil(inputData.length / chunks); // Розмір кожної частини
  
  // Фаза Map
  var mapResults = [];
  for (var i = 0; i < chunks; i++) {
    var start = i * chunkSize;
    var end = start + chunkSize;
    var chunk = inputData.slice(start, end);
    var result = mapFunction(chunk);
    mapResults = mapResults.concat(result);
  }
  
  // Фаза Reduce
  var reduceResults = {};
  for (var i = 0; i < mapResults.length; i++) {
    var key = mapResults[i].key;
    var value = mapResults[i].value;
  
    if (!reduceResults.hasOwnProperty(key)) {
      reduceResults[key] = [];
    }
  
    reduceResults[key].push(value);
  }
  
  // Обчислення кінцевого результату
  var finalResults = {};
  for (var key in reduceResults) {
    if (reduceResults.hasOwnProperty(key)) {
      finalResults[key] = reduceFunction(key, reduceResults[key]);
    }
  }
  
  console.log(finalResults);
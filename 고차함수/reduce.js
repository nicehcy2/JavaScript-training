/**
 * ### reduce
 *
 * **설명**: `reduce` 함수는 배열의 각 요소를 하나의 결과값으로 집계합니다.
 * 배열의 각 요소를 누적하여 하나의 값을 생성하는 데 사용됩니다.
 *
 * **용도**: 배열의 요소를 합산하거나, 집계하거나, 복잡한 계산을 수행하여 단일 값을 생성할 때 사용됩니다.
 */

// array.reduce(callback(accumulator, currentValue, index, array), initialValue)
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, x) => acc + x, 10);
console.log(sum);

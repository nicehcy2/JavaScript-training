/**
 * ### 1. map
 *
 * **설명**: `map` 함수는 배열의 각 요소에 대해 주어진 함수를 호출하여, 반환된 값을 새로운 배열로 만들어 반환합니다.
 * 원본 배열은 변경되지 않습니다.
 * **용도**: 배열의 각 요소를 변환하거나 처리하여 새로운 배열을 생성할 때 사용됩니다.
 */

// array.map(callback(currentValue, index, array))

const numbers = [1, 2, 3, 4, 5];
const map = numbers.map((value, index) => value + index);
console.log(map);
/**
 * ### 3. filter
 *
 * **설명**: `filter` 함수는 배열의 각 요소를 검사하여 주어진 조건을 만족하는 요소만을 포함하는 새로운 배열을 반환합니다.
 * 원본 배열은 변경되지 않습니다.
 *
 * **용도**: 배열에서 특정 조건을 만족하는 요소들만을 추출하여 새로운 배열을 생성할 때 사용됩니다.
 */

// array.filter(callback(currentValue, index, array))

const numbers = [1, 2, 3, 4, 5];
const num = numbers.filter((x) => x % 2 == 0);
console.log(num);
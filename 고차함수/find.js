/**
 * ### 5. find
 *
 * `find` 메서드는 배열의 각 요소에 대해 주어진 조건을 만족하는 첫 번째 요소를 반환합니다.
 * 조건을 만족하는 요소를 찾지 못하면 `undefined`를 반환합니다.
 */

// array.find(callback(element, index, array), thisArg);
const array = [1, 2, 3, 4, 5];
const firstEven = array.find((element) => element % 2 === 0);
console.log(firstEven); // 2
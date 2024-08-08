/**
 * ### 4. forEach
 *
 * **설명**: `forEach`는 배열의 각 요소에 대해 주어진 함수를 한 번씩 실행합니다. 반환 값이 없습니다.
 * **용도:** 배열의 요소를 반복하면서 어떤 작업을 수행할 때 사용
 */

// array.forEach(callback(currentValue, index, array) {
//   // 실행할 코드
// }, thisArg);

const array = [1, 2, 3, 4, 5];
array.forEach((element, index) => {
    console.log(`Index ${index}: ${element}`);
});

array.forEach(x => console.log(x));
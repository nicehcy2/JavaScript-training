/**
 * 배열
 */
// 리터럴 표기법
const arr = [1, 2, 3, 4, 5];

// Array 생성자 함수
const arr1 = new Array(5); // 길이가 5인 빈 배열 (undefined로 초기화)
const arr2 = new Array(1, 2, 3); // [1, 2, 3]
const arr3 = new Array(10).fill(1); // 길이가 10이고 값이 1인 배열
console.log(arr3);


// Array.from
// length 인자 던져주기
const arr4 = Array.from({length:5}, (value, index) => index);
console.log(arr4);

// push 배열의 끝에 요소 추가
arr.push(4);

// pop 배열의 끝에서 요소 제거
arr.pop();

// unshift() 배열의 시작에 요소 추가
arr.unshift(0);

// shift 배열의 시작에서 요소 제거
arr.shift();

// 변환 및 복사 - concat, slice, splice

// indexOf, includes

// sort
arr.sort();
console.log(arr)

// 내림차순 sort
arr.sort((a, b) => b - a);
console.log(arr);

// find 조건에 맞는 첫번쨰요소 반환
const found = arr.find(element => element > 1);

// findIndex

// Array.isArray(): 주어진 값이 배열인지 확인
// from(): 유사 배열 객체를 배열로 변환
// of(): 인수로 받은 값을 요소로 하는 배열 생성
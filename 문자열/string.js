/**
 * 1.문자열 생성
 */
// 작은 따옴표
const str1 = 'Hello, world!';

// 큰 따옴표
const str2 = "Hello, world!";

// 백틱
const WORLD = 'WORLD';
const str3 = `Hello, ${WORLD}!`;

/**
 * 2. 문자열 연결
 */
const firstName = 'Heo';
const secondName = 'Chanyoung';
const fullName1 = firstName + ' ' + secondName;
const fullName2 = `${firstName} ${secondName}`;

/**
 * 3. 문자열 자르기
 */
// 1. substr - 문자열.substr(시작위치, 길이)
let str = "FOOTBALL MANAGER";
const start = 0, end = 5,length = 5;

// 시작위치부터 길이만큼 자른다.
str.substr(start, length);
// 길이를 생략시에 시작위치부터 끝까지 자른다.
str.substr(start);

// 2. substring - 문자열.substring(시작위치, 종료위치)
str = "LEAGUE OF LEGEND";

// 시작위치부터 종료위치까지 자른다. 시작 위치 ~ 종료위치 - 1 까지
str.substring(start, end);
str.substring(start);

// 3. slice - 문자열.slice(시작위치, 종료위치)
str = "FIFA ONLINE";
str.slice(start, end);
str.slice(start);

str = "Hello, World!";
// 문자열의 끝에서부터 6번째 위치를 의미
// -6 위치부터 문자열의 끝까지 잘라서 반환
// 문자열 "Hello, world!"에서 -1은 !을 나타내고,
// -6은 w를 나타냅니다.
console.log(str.slice(-1));
console.log(str.slice(-6, -1)); // -6은 시작인덱스, -1은 종료 인덱스

/**
 * 4. 문자열 대소문자 변환
 */
// 1. toUpperCase 대문자 변환
str = 'abcdefg';
str.toUpperCase();

// 2. toLowerCase 소문자 변환
str = 'ABCDEFG';
str.toLowerCase();
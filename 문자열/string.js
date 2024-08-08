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

/**
 * 5. 문자열 파싱 및 변환
 */
// 1. indexOf - 문자열.indexOf(찾는 문자열)
// 문자열 속 원하는 문자열을 찾아 그 처음 인덱스를 리턴
str = 'When i was your man';
str.indexOf('our');

// 2. includes - 문자열.includes(찾는 문자열)
// 문자열 속에서 원하는 문자열이 있다면 true, 없다면 false를 리턴
str = 'When i was your man';
str.includes('our');

// 3. replace - 문자열.replace(찾는 문자열, 바꿀 문자열);
// 문자열 속에서 해당하는 문자열을 뒤에 인자로 받은 문자열로 치환
str = "I am an IronMan";
str.replace("IronMan", "Hulk"); // 하나만
str.replaceAll("I", "He"); // 전체

// 4. split - 문자열.split(기준 문자열)
// 문자열을 기준 문자열 기준으로 잘라 배열을 만들어준다.
str = "Column: 12";
let arr = str.split(': ');

// 5. repeat - 문자열.repeat(반복횟수)
// 해당 문자열을 반복횟수만큼 붙여서 리턴한다.
str = "123";
str.repeat(3);

// 6. trim() - 문자열 양 끝의 공백 제거
const trimmed = '  Hello, world!  '.trim();

// 7. length - 문자열 길이
const length = str1.length;

// 8. join - array.join(separator)
const fruits = ['apple', 'banana', 'cherry'];
str = fruits.join(' - ');

/**
 * 6. 문자열 타입 변환
 */
// 1. charCodeAt - 문자열.charCodeAt()
// 해당 문자열을 아스키코드로 바꿨을 때 값을 리턴한다.
str = 'A';
str.charCodeAt();

// 2. String.fromCharCode(숫자)
// 원하는 숫자에 대한 아스키 값을 리턴한다.
str = 65;
String.fromCharCode(str);

// 3. toString - 숫자.toString(변환 형태 숫자)
let num = 10;
console.log(num.toString());

// 4. parseXXX
const parseIntNum = parseInt('123');
const parseFloatNum = parseFloat('123.34');
const plusNum = +'123';
/**
 * 객체: 키-값 쌍을 저장하는 기본적인 데이터 구조
 */
// 객체 리터럴을 사용한 생성
const person = {
    name: 'Alice',
    age: 30,
    greet: function() {
        console.log('Hello!');
    }
};

// 속성 접근:
console.log(person.name);
console.log(person["age"]);

// 속성 추가 및 수정:
person.email = 'nicehcy2@naver.com';
person.age = 31;

// 속성 삭제:
delete person.email;

// 속성 검사:
console.log('age' in person);
console.log(person.hasOwnProperty("name"));
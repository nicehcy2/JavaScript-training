/**
 * Map 객체
 */
// Map 생성
const map = new Map();

// 키-값 쌍 추가 (set)
map.set('name', 'Alice');
map.set(1, 'one');
map.set(true, 'yes');

// 값 조회 (get)
// map['name'] 이런 식으로 접근하면 절대 안됨 -> undefined 발생
console.log(map.get('name'));

// 키 존재 여부 확인
console.log(map.has(1));

// 키-값 쌍 삭제
map.delete(true);

// 전체 삭제
// map.clear();

// 크기 확인
console.log(map.size);

// 반복
// forEach일 경우 (value, key) 형태로 사용
map.forEach((value, key) => {
   console.log(`${key}: ${value}`);
});

for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// 정렬
map.clear();
map.set(1,{id:"aaa",password:2222});
map.set(2,{id:"bbb",password:3333});
map.set(3,{id:"ccc",password:1111});

// 배열로 변환한 후 정렬하기
// [...map]을 사용하면 Map을 [key, value] 쌍의 배열로 변환
var arr = [...map];
arr.sort((a, b)=> {
    // password를 기준으로 내림차순으로 정렬
    if (a[1].password < b[1].password) {
        return 1;
    }
    else return -1;
})

console.log(arr);
var newMap = new Map(arr);
console.log(newMap);
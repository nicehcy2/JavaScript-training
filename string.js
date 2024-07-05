data = "1 2 3 4 5";

// 입력 데이터(string)으로 받아 " " 단위로 분리하고 Number 타입으로 변환하여 배열로 저장
let parseData1 = data.split(" ").map(Number);

// String으로 저장
let parseData2 = data.split(" ").map(String);

console.log(parseData1);
console.log(parseData2);

// parseData1을 map으로 저장
let map = new Map();

parseData1.forEach(num => {
    if (map.has(num)) {
        map.set(num, map.get(num) + 1);
    } else {
        map.set(num, 1);
    }
});

console.log(map);

// join
console.log(parseData1.join("|").concat("!\n"));

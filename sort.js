let arr = [2,9,3,0,0,2,0,3,3,0];

// 오름차순 정렬
arr.sort((a, b) => {
    if (a>b) return 1;
    else return -1;
})

// 내림차순 정렬
arr.sort((a, b) => {
    if (a>b) return 1;
    else return -1;
})

// 오름차순 정렬
arr.sort((a,b) => Number(a) - Number(b));

// 내림차순 정렬
arr.sort((a,b) => Number(b) - Number(a));

console.log(arr);

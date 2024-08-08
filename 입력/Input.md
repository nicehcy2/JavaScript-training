# 입력

```JS
const readline = require('readline');

let data = [];

const Solution = () => {
    console.log(data);
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });

	for await (const line of rl) {
        if (!line) {
            rl.close();
        }
        else {
            let row = line.split(' ').map(String);
            // let row = line.split(' ').map(Number); // Number
            data.push(row);
        }
	}

    Solution();
	
	process.exit();
})();
```
- Goorm 코딩 테스트의 Node.js의 입력 환경은 다음과 같다.
- 동기 함수인 Solution에서 메인 로직을 작성하면 된다.
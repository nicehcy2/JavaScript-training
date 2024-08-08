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


let data = [];

(async () => {
	let rl = readline.createInterface({ input: process.stdin });

	for await (const line of rl) {
        if (!line) {
            rl.close();
        }
        else {
            let row = line.split(' ').map(Number);
            data.push(row);
        }
	}

    Solution();
	
	process.exit();
})();

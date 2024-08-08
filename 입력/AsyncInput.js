import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

// const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');

const Input = async (text) => {
    const rl = readline.createInterface({ input, output });

    const result = await new Promise((resolve) => {

        rl.question(text, (answer) => {
            rl.close();
            resolve(answer);
        });
    });

    return result;
}

const main = async () => {
    const userInput = await Input("실행할 요청 파일을 입력하세요\n$ ");
}

main();

export default Input;
// module.exports = Input;
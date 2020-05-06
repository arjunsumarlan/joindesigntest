const prompt = require('prompt');
const solve = require('./logics');
const onError = require('./utils/onError');

start();

/**
 * All of the process will start from here
 */
function start() {
    console.log('Please enter string here...');

    prompt.start(); // start prompt ui

    // get string input from user
    prompt.get(['string'], function (err, result) {
        if (err) return onError(err);;

        console.time('Processing Time: ');

        let input = result.string;
        let cleanInput = input.replace(/[^A-Z0-9]/ig, "");
        console.log(`\nprocessing for ${cleanInput.length} length of string`);

        let final = solve(input);

        if (cleanInput.length > 100) {
            console.error(`Error: ${final}\n`);
        } else {
            console.log(`output: ${final}\n`);
        }

        console.timeEnd('Processing Time: '); // measuring processing time

        restart();
    });
}

/**
 * Asking user to decide whether restart or quit
 */
function restart() {
    console.log('\nDo you want to try again ? (y/n)');

    prompt.get(['answer'], function (err, result) {
        if (err) return onError(err);

        const answer = result.answer.toLowerCase();

        if (answer === "y" || answer === "yes" || answer === "ya") {
            start();
        } else if (answer === "n" || answer === "no") {
            console.log("Exit...")
        } else {
            restart();
        }
    });
}
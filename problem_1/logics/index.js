module.exports = function (string) {
    const input = string.replace(/[^A-Z0-9]/ig, ""); // replace all whitespaces and symbols
    if (input.length > 100) return "Please input string that no more than 100 length";

    // --- LOGIC START HERE ---

    // init result
    let result = [];

    // convert string to array
    const strings = input.split("");

    for (let i = 0; i < strings.length; i++) {

        // pick a char from strings with index of i
        let char = strings[i];

        if (result.length > 0) {

            // remove char from result when doubled
            if (result[result.length - 1] === char) result.pop();

            // add char to result when not doubled
            else result.push(char);

        } else {
            // add char to result when empty
            result.push(char);
        }
    }

    // return this when empty string
    if (result.length === 0) {
        return "Empty String";
    }

    return result.join(""); // join strings

    // --- LOGIC END HERE ---
}
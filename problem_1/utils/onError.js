module.exports = function onError(err) {
    if (err.message === "canceled") {
        console.log("Exit...\n");
        return 1
    };
    console.log(`${err.message}\n`);
    return 1;
}
const { AVERAGE_QUERY } = require('../constants');

/**
* Calculating the amount of error (i.e.: actual - miscalculated) average monthly salaries
* Then show it on console
*/
module.exports = async function average(con, start) {
    try {
        await con.query(AVERAGE_QUERY, (err, rows) => {
            if (err) throw err;

            console.table(rows);
            start();
        })
    } catch (error) {
        console.log(error.message);
    }
}
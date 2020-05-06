const { SHOW_QUERY } = require('../constants');

/**
* Show existing data table on console
*/
module.exports = async function show(con, start) {
    try {
        await con.query(SHOW_QUERY, (err, rows) => {
            if (err) throw err;

            console.table(rows);
            start();
        });
    } catch (error) {
        console.log(error.message);
    }
}
const prompt = require('prompt');
const show = require('./show');
const onError = require('../utils/onError');
const { insertQuery } = require('../constants');

/**
* Insert new Employee then show table on console
*/
module.exports = function insert(con, start) {
    console.log('INSERT NEW EMPLOYEE');

    prompt.get(['name', 'salary'], async (err, result) => {
        if (err) return onError(err);

        let name = result.name;
        let salary = result.salary;

        try {
            await con.query(insertQuery(name, salary), async (err, rows) => {
                if (err) throw err;

                await show(con, start);
            })
        } catch (error) {
            console.log(error.message);
        }
    });
}
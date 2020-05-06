const sinon = require('sinon');
const mysql = require('mysql');
const {
    AVERAGE_QUERY,
    insertQuery,
    SHOW_QUERY
} = require('../../constants');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.Password,
    database: 'employee'
});

var mock = sinon.mock(con);

describe("test query of problem 2", () => {
    it("insert", async () => {
        mock
            .expects('query')
            .withArgs(insertQuery("john", "1400"))
            .yields(null, {
                fieldCount: 0,
                affectedRows: 1,
                insertId: 9,
                serverStatus: 2,
                warningCount: 0,
                message: '',
                protocol41: true,
                changedRows: 0
            });
    });

    it("show", async () => {
        mock
            .expects('query')
            .withArgs(SHOW_QUERY)
            .yields(null, [
                { id: 1, name: 'Gavin', salary: 1420 },
                { id: 2, name: 'Norie', salary: 2006 },
                { id: 3, name: 'Somya', salary: 2210 },
                { id: 4, name: 'Waiman', salary: 3000 },
                { id: 5, name: 'Arjun', salary: 1400 },
                { id: 6, name: 'Cintya', salary: 1000 },
                { id: 7, name: 'Sumarlan', salary: 5104 },
                { id: 8, name: 'Nursyifa', salary: 6909 },
                { id: 9, name: 'john', salary: 1011 }
            ]);
    });

    it("average", async () => {
        mock
            .expects('query')
            .withArgs(AVERAGE_QUERY)
            .yields(null, [
                { avg_salary: 2481 }
            ]);
    });
});
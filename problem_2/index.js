const prompts = require('prompts');
const mysql = require('mysql');
const dotenv = require('dotenv');
const show = require('./logics/show');
const insert = require('./logics/insert');
const average = require('./logics/average');

dotenv.config();

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.Password,
    database: 'employee'
});

function endConnection() {
    con.end();
}

con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

    start();

    function start() {
        (async () => {
            try {
                const _ = await prompts({
                    type: 'select',
                    name: 'option',
                    message: 'Choose you want to do',
                    choices: [
                        { title: 'Show Table', value: 'show' },
                        { title: 'Insert new Employee', value: 'insert' },
                        { title: 'Calculate Average', value: `average` },
                        { title: 'Exit', value: 'exit' }
                    ]
                });

                switch (_.option) {
                    case 'show':
                        show(con, start);
                        break;
                    case 'average':
                        average(con, start);
                        break;
                    case 'insert':
                        insert(con, start);
                        break;
                    case 'exit':
                        endConnection();
                        break;
                    default:
                        break;
                }
            } catch (error) {
                console.log(error.message);
                endConnection();
            }
        })();
    }
});
module.exports = {
    AVERAGE_QUERY: "SELECT CEIL((AVG(salary)) - (AVG(REPLACE(salary, '0', '')))) AS avg_salary FROM employee;",
    insertQuery: (name, salary) => `INSERT INTO employee (name, salary) VALUES ('${name}', ${salary});`,
    SHOW_QUERY: "SELECT * FROM employee;"
}
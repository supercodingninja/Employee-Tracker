const connection = require('./connect.js');
const app = require('../app.js');
const {findDpt, findRole, findEmp} = require('../assets/library/cliQuestions.js');

findDpt();

findRole();

findEmp();

export default seekTables;
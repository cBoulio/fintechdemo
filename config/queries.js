const Pool = require('pg').Pool

exports.pool = Pool({
    
    user: 'db_Admin',
    host: 'localhost',
    database: 'Fintechtb',
    password: 'dangerMouse535',
    port: 5432,

});
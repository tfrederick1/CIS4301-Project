const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

// Instant client handler. Verifies that instant client can be found
try {
    oracledb.initOracleClient({libDir:
    'C:\\Users\\taylo\\OneDrive\\Documents\\Path\\instantclient_19_10'});
} catch(err) {
    console.error('Whoops!');
    console.error(1);
    process.exit(1);
}

async function run() {
    let connection;

    try {
        connection = await oracledb.getConnection( {
            user : "frederic",
            password : "BeanyBaby1",
            connectString : "oracle.cise.ufl.edu/orcl"  
        });

        const result = await connection.execute(
            `SELECT *
            FROM "ADEEB.RASHID"."PROJECT_FLIGHT"
            FETCH FIRST 10 ROWS ONLY`
        );
        console.log(result.rows);
        return result;
    } catch(err) {
        console.error(err);
    } finally {
        if(connection) {
            try {
                await connection.close();
            } catch(err) {
                console.error(err);
            }
        }
    }
}

run();
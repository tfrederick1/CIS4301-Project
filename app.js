const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 5000;
const index = require("./routes/index");

const app = express();
app.use(index);


const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});
const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
try {
  oracledb.initOracleClient({libDir:
        'C:\\Users\\taylo\\OneDrive\\Documents\\Path\\instantclient_19_10'});
} catch(err) {
  console.error(err);
  console.error(1);
  process.exit(1);
}

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on('Query 1',(arguments) => {
    console.log(arguments);

// Instant client handler. Verifies that instant client can be found

    async function run(arguments) {
      let connection;

      try {
        connection = await oracledb.getConnection( {
          user : "adeeb.rashid",
          password : "zachiscute123",
          connectString : "oracle.cise.ufl.edu/orcl"
        });

        const result = await connection.execute(
            `SELECT *
            FROM "ADEEB.RASHID"."PROJECT_FLIGHT"
            FETCH FIRST 10 ROWS ONLY`
        );
        console.log(result.rows);
        return result.rows;
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

    let se= run(arguments);
    //Wait for 5 mins
    se.then(value => io.emit("Results",value));
  });
  socket.on('Query 2',(arguments) => {
    console.log(arguments);
    async function run(arguments) {
      let connection;

      try {
        connection = await oracledb.getConnection( {
          user : "adeeb.rashid",
          password : "zachiscute123",
          connectString : "oracle.cise.ufl.edu/orcl"
        });

        const result = await connection.execute(
            `SELECT EXTRACT(MONTH FROM END_TIME) AS month, COUNT(*) AS COUNT
            FROM PROJECT_FLIGHT
            WHERE DEPARTURE  IN
            (SELECT ICAOAP FROM PROJECT_AIRPORT WHERE COUNTRY IN
            (
            SELECT DISTINCT COUNTRY_NAME AS HOTSPOTS FROM(
            SELECT COUNTRY_NAME, MONTH, SUMS, ROW_NUMBER() OVER(PARTITION BY MONTH ORDER BY SUMS DESC) AS RN
            FROM(
            SELECT COUNTRY_NAME, EXTRACT(MONTH FROM DAY) AS MONTH, SUM(NEW_CASES) AS SUMS
            FROM PROJECT_STATISTIC
            WHERE COUNTRY_NAME NOT IN ('WORLD', 'EUROPE', 'NORTH AMERICA', 'ASIA', 'AFRICA', 'NORTH AMERICA', 'EUROPEAN UNION', 'SOUTH AMERICA') AND NEW_CASES IS NOT NULL
            GROUP BY COUNTRY_NAME, EXTRACT(MONTH FROM DAY)
            ORDER BY MONTH DESC, SUM(NEW_CASES) DESC
            )
            )
            WHERE RN <=5
            )
            )
            AND DESTINATION IN
            (SELECT ICAOAP FROM PROJECT_AIRPORT WHERE COUNTRY = '` + arguments[0] + `')
            GROUP BY  EXTRACT(MONTH FROM END_TIME)
            ORDER BY EXTRACT(MONTH FROM END_TIME)`
        );
        console.log(result.rows);
        return result.rows;
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

    let se= run(arguments);
    //Wait for 5 mins
    se.then(value => io.emit("Results",value));
  });
  socket.on('Query 3',(arguments) => {
    console.log(arguments);
    async function run(arguments) {
      let connection;

      try {
        connection = await oracledb.getConnection( {
          user : "adeeb.rashid",
          password : "zachiscute123",
          connectString : "oracle.cise.ufl.edu/orcl"
        });

        const result = await connection.execute(
            `SELECT *
            FROM "PROJECT_AIRPORT"
            FETCH FIRST 10 ROWS ONLY`
        );
        return result.rows;
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

    let se= run(arguments);
    //Wait for 5 mins
    se.then(value => io.emit("Results",value));
  });
  socket.on('Query 4',(arguments) => {
    console.log(arguments);
    async function run(arguments) {
      let connection;

      try {
        connection = await oracledb.getConnection( {
          user : "adeeb.rashid",
          password : "zachiscute123",
          connectString : "oracle.cise.ufl.edu/orcl"
        });

        const result = await connection.execute(
            `SELECT *
            FROM "PROJECT_AIRPORT"
            FETCH FIRST 10 ROWS ONLY`
        );
        return result.rows;
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

    let se= run(arguments);
    //Wait for 5 mins
    se.then(value => io.emit("Results",value));
  });
  socket.on('Query 5',(arguments) => {
    console.log(arguments);
    async function run(arguments) {
      let connection;

      try {
        connection = await oracledb.getConnection( {
          user : "adeeb.rashid",
          password : "zachiscute123",
          connectString : "oracle.cise.ufl.edu/orcl"
        });

        const result = await connection.execute(
            `SELECT *
            FROM "PROJECT_AIRPORT"
            FETCH FIRST 10 ROWS ONLY`
        );
        return result.rows;
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

    let se= run(arguments);
    //Wait for 5 mins
    se.then(value => io.emit("Results",value));
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
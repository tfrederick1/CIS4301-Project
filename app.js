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
            `SELECT EXTRACT(MONTH FROM End_Time), COUNT(*) 
            FROM "adeeb.rashid"."Project_Flight" 
            WHERE Departure  IN 
            (SELECT ICAOAP FROM "adeeb.rashid"."Project_Airport" WHERE Country IN 
            (
            SELECT DISTINCT Country_Name as Hotspots FROM(
            SELECT Country_Name, month, sums, row_number() OVER(PARTITION BY MONTH ORDER BY sums DESC) AS rn
            FROM(
            SELECT Country_Name, EXTRACT(MONTH FROM Day) AS month, SUM(New_Cases) AS sums
            FROM "adeeb.rashid"."Project_Statistic"
            WHERE Country_Name NOT IN ('World', 'Europe', 'North America', 'Asia', 'Africa', 'North America', 'European Union', 'South America') AND New_Cases IS NOT NULL
            GROUP BY Country_Name, EXTRACT(MONTH FROM Day) 
            ORDER BY month DESC, SUM(New_Cases) DESC
            )
            )
            WHERE rn <=5
            )
            )
            AND Destination IN
            (SELECT ICAOAP FROM "adeeb.rashid"."Project_Airport" WHERE Country = 'India')
            GROUP  BY  EXTRACT(MONTH FROM End_Time)
            ORDER BY EXTRACT(MONTH FROM End_Time)`
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
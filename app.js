// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var cors = require('cors');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors());
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;
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
        'D:\\Zach\\Desktop\\CIS4301Project\\instantclient_19_10'});
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

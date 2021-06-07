const express = require('express');
var cors = require('cors')
const PORT = 3000;
const server = express();

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const passport = require('passport');
require('./passport'); 
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
server.use(
  session({
    secret: 'upgradehub_node', // ¡Este secreto tendremos que cambiarlo en producción!
    resave: false, // Solo guardará la sesión si hay cambios en ella.
    saveUninitialized: false, // Lo usaremos como false debido a que gestionamos nuestra sesión con Passport
    cookie: {
      maxAge: 360000, 
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);
server.use(passport.initialize());
server.use(passport.session());

const path = require('path');
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

const indexRoutes = require('./routes/index.routes');
server.use('/', indexRoutes);

const userRouter = require('./routes/user.routes');
server.use('/users', userRouter);

const gameRoutes = require('./routes/game.routes');
server.use('/games', gameRoutes);

server.use('*', (req, res, next) => {
	const error = new Error('Route not found'); 
	error.status = 404;
	next(error); // Lanzamos la función next() con un error
  });
  
  // Si se lanza la función
  server.use((err, req, res, next) => {
	return res.status(err.status || 500).json(err.message || 'Unexpected error');
  });
  
  server.listen(PORT, () => {
	console.log(`Server running in http://localhost:${PORT}`);
  });
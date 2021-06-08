require('dotenv').config();
const express = require('express');
var cors = require('cors')
const PORT = process.env.PORT || 3000;
const server = express();

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const passport = require('passport');
require('./passport'); 
const session = require('express-session');
if(process.env.MODE == 'dev'){
  const MongoStore = require('connect-mongodb-session')(session);
  server.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false, // Solo guardará la sesión si hay cambios en ella.
      saveUninitialized: false, // Lo usaremos como false debido a que gestionamos nuestra sesión con Passport
      cookie: {
        maxAge: 360000, 
      },
      store: new MongoStore({
        url: process.env.DB_URL
      })
    })
  );
}

else{
  var RedisStore = require('connect-redis')(session);  
  var rtg   = require("url").parse(process.env.REDISTOGO_URL);
  var redis = require("redis").createClient(rtg.port, rtg.hostname);
  redis.auth(rtg.auth.split(":")[1]);

  server.use(session({
    name: 'random_pur',
    store: new RedisStore({
      client: redis
    }),
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      secure: false,
      sameSite: false,
      maxAge: 360000,
      httpOnly: false,
    }
  }));
}

server.use(passport.initialize());
server.use(passport.session());

const path = require('path');
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

server.use(express.static(path.join(__dirname, 'public')));

const indexRoutes = require('./routes/index.routes');
server.use('/', indexRoutes);

const userRouter = require('./routes/user.routes');
server.use('/users', userRouter);


const authMiddleware = require('./middlewares/auth.middleware');

const gameRoutes = require('./routes/game.routes');
server.use('/games', [authMiddleware.isAuthenticated], gameRoutes);

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
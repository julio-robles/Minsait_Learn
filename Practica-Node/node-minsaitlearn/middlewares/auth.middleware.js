const User = require('../db/models/user');

function isAuthenticated(req, res, next) {
	// Si el Boolean de autenticación devuelve true, avanzamos al siguiente punto
  if (req.isAuthenticated()) {
    return next();
  } else {
		// En caso de no hacer usuarios logeados, redireccionamos a login
    return res.redirect('/users/login');
  }
}

async function isAdmin(req, res, next) {
  const admin = await User.findById(req.session.passport.user);
  if (admin.admin) {
    return next();
  }
  else return res.redirect('.');
}

module.exports = {
  isAuthenticated,
  isAdmin,
}; 
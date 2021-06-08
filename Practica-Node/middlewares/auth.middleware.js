function isAuthenticated(req, res, next) {
	// Si el Boolean de autenticación devuelve true, avanzamos al siguiente punto
  if (req.isAuthenticated()) {
    return next();
  } else {
		// En caso de no hacer usuarios logeados, redireccionamos a login
    return res.redirect('/login');
  }
}

module.exports = {
  isAuthenticated,
}; 
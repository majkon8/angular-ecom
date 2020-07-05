const jwt = require("jsonwebtoken");
const User = require("./models/user.model");

const handleCORS = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id"
  );
  res.header(
    "Access-Control-Expose-Headers",
    "x-access-token, x-refresh-token"
  );
  next();
};

// check whether the request has a valid JWT access token
const authenticate = (req, res, next) => {
  const token = req.header("x-access-token");
  jwt.verify(token, User.getJWTSecret(), (err, decoded) => {
    if (err) {
      // there was an error, jwt is invalid DO NOT AUTHENTICATE
      res.status(401).send(err);
    } else {
      // decoding gives user id because it was used along with jwtsecret to encrypt token
      req.user_id = decoded._id;
      next();
    }
  });
};

const adminAuthenticate = (req, res, next) => {
  const _id = req.header("_id");
  User.findById(_id)
    .then(user => {
      if (!user) {
        return Promise.reject({
          error: "User not found. Make sure that the user id is correct"
        });
      }
      if (!user.isAdmin) {
        return Promise.reject({
          error: "User is not authorized"
        });
      }
      next();
    })
    .catch(e => res.status(401).send(e));
};

const verifySession = (req, res, next) => {
  const refreshToken = req.header("x-refresh-token");
  const _id = req.header("_id");
  User.findByIdAndToken(_id, refreshToken)
    .then(user => {
      if (!user) {
        return Promise.reject({
          error:
            "User not found. Make sure that the refresh token and user id are correct"
        });
      }
      // if the code reaches here - the user was found therefore the refresh token exists in the databse - but we still have to check if it has expired or not
      req.user_id = user._id;
      req.userObject = user;
      req.refreshToken = refreshToken;
      let isSessionValid = false;
      user.sessions.forEach((session, index) => {
        if (session.token === refreshToken) {
          if (User.hasRefreshTokenExpired(session.expiresAt) === false) {
            isSessionValid = true;
          } else {
            user.sessions.splice(index, 1);
          }
        } else {
          if (User.hasRefreshTokenExpired(session.expiresAt)) {
            // remove session if is expired
            user.sessions.splice(index, 1);
          }
        }
      });
      if (isSessionValid) {
        user.save();
        // the session is VALID - call next() to continue with processing this web request
        next();
      } else {
        user.save();
        return Promise.reject({
          error: "Refresh token has expired or the session is invalid"
        });
      }
    })
    .catch(e => res.status(401).send(e));
};

module.exports = {
  handleCORS: handleCORS,
  authenticate: authenticate,
  adminAuthenticate: adminAuthenticate,
  verifySession: verifySession
};

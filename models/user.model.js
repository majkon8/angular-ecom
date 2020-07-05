const mongoose = require("mongoose");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const jwtSecret = "04727166051786259159tighidhgkdu9098751252fsg4480267944";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  name: {
    firstName: {
      type: String,
      default: ""
    },
    lastName: {
      type: String,
      default: ""
    }
  },
  address: {
    street: {
      type: String,
      default: ""
    },
    city: {
      type: String,
      default: ""
    },
    country: {
      type: String,
      default: ""
    },
    postcode: {
      type: String,
      default: ""
    }
  },
  cart: [
    {
      product: Object,
      quantity: Number
    }
  ],
  sessions: [
    {
      token: {
        type: String,
        required: true
      },
      expiresAt: {
        type: Number,
        required: true
      }
    }
  ],
  resetPasswordToken: {
    token: {
      type: String
    },
    expiresAt: {
      type: Number
    }
  }
});

/*** Instance methods ***/

UserSchema.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();
  // return the document except the password and sessions (these shouldn't be made available)
  return _.omit(userObject, ["password", "sessions", "resetPasswordToken"]);
};

UserSchema.methods.generateAccessAuthToken = function() {
  const user = this;
  return new Promise((resolve, reject) => {
    // Create the JSON Web Token and return that
    jwt.sign(
      { _id: user._id.toHexString() },
      jwtSecret,
      { expiresIn: "10m" },
      (err, token) => {
        if (!err) resolve(token);
        else reject();
      }
    );
  });
};

UserSchema.methods.generateToken = function() {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (!err) {
        const token = buf.toString("hex");
        return resolve(token);
      }
    });
  });
};

UserSchema.methods.createSession = function() {
  const user = this;
  return (
    user
      // generates refresh token
      .generateToken()
      .then(refreshToken => saveSessionToDatabase(user, refreshToken))
      .then(refreshToken => {
        // saved to database successfully
        // now return the refresh token
        return refreshToken;
      })
      .catch(e => Promise.reject("Failed to save session to database.\n" + e))
  );
};

UserSchema.methods.createMail = function() {
  const user = this;
  return (
    user
      // generates reset password token
      .generateToken()
      .then(resetPasswordToken =>
        saveResetPasswordToken(user, resetPasswordToken)
      )
      .then(() => {
        return (mailOptions = {
          from: "majkonserver@gmail.com",
          to: user.email,
          subject: "Reset your ecom password",
          text: `Hello, click in the link below to reset your password. 
The link will expire in 10 minutes of sending the email.
localhost:4200/reset/${user.resetPasswordToken.token}`
        });
      })
      .catch(e => Promise.reject("Failed to send recovery email.\n" + e))
  );
};

/*** Model methods (static methods) ***/

UserSchema.statics.getJWTSecret = () => jwtSecret;

UserSchema.statics.findByIdAndToken = function(_id, token) {
  const User = this;
  return User.findOne({
    _id,
    "sessions.token": token
  });
};

UserSchema.statics.findByCredentials = function(email, password) {
  const User = this;
  return User.findOne({ email }).then(user => {
    if (!user) return Promise.reject();
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  });
};

UserSchema.statics.hasRefreshTokenExpired = expiresAt => {
  const secondsSinceEpoch = Date.now() / 1000;
  if (expiresAt > secondsSinceEpoch) return false;
  else return true;
};

/*** Middleware ***/

UserSchema.pre("save", function(next) {
  const user = this;
  const costFactor = 10;
  if (user.isModified("password")) {
    bcrypt.genSalt(costFactor, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else next();
});

/*** Helpers ***/

const saveSessionToDatabase = (user, refreshToken) => {
  return new Promise((resolve, reject) => {
    const expiresAt = generateRefreshTokenExpiryTime();
    user.sessions.push({ token: refreshToken, expiresAt });
    user
      .save()
      .then(() => {
        // saved session successfully
        return resolve(refreshToken);
      })
      .catch(e => {
        reject(e);
      });
  });
};

const saveResetPasswordToken = (user, token) => {
  return new Promise((resolve, reject) => {
    const expiresAt = generatePasswordRefreshTokenExpiryTime();
    user.resetPasswordToken = { token, expiresAt };
    user
      .save()
      .then(() => {
        // saved session successfully
        return resolve(token);
      })
      .catch(e => {
        reject(e);
      });
  });
};

const generateRefreshTokenExpiryTime = () => {
  const daysUntilExpire = "10";
  const secondsUntilExpire = daysUntilExpire * 24 * 60 * 60;
  return Date.now() / 1000 + secondsUntilExpire;
};

const generatePasswordRefreshTokenExpiryTime = () => {
  const minutesUntilExpire = "10";
  const secondsUntilExpire = minutesUntilExpire * 60;
  return Date.now() / 1000 + secondsUntilExpire;
};

module.exports = mongoose.model("User", UserSchema);

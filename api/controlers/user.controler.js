const User = require("../models/user.model");
const nodeMailer = require("nodemailer");

// GET ONE USER
exports.findUser = (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .then(user => {
      res.send(user);
    })
    .catch(e => res.status(400).send(e));
};

// GET ALL USERS
exports.findAll = (req, res) => {
  User.find()
    .then(users => res.send(users))
    .catch(e => res.send(e));
};

// UPDATE USER
exports.update = (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    { $set: req.body.result },
    { new: true }
  )
    .then(user => res.send(user))
    .catch(e => res.status(400).send(e));
};

// CREATE USER (SIGN UP)
exports.signup = (req, res) => {
  const body = req.body;
  const newUser = new User(body);
  newUser
    .save()
    .then(() => newUser.createSession())
    .then(refreshToken => {
      // Session created successfully - refreshToken returned.
      // now we generate an access auth token for the user
      return newUser.generateAccessAuthToken().then(accessToken => {
        return { accessToken, refreshToken };
      });
    })
    .then(authTokens => {
      res
        .header("x-refresh-token", authTokens.refreshToken)
        .header("x-access-token", authTokens.accessToken)
        .send(newUser);
    })
    .catch(e => res.status(400).send(e));
};

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findByCredentials(email, password)
    .then(user => {
      return user
        .createSession()
        .then(refreshToken => {
          // Session created successfully - refreshToken returned.
          // now we generate an access auth token for the user
          return user.generateAccessAuthToken().then(accessToken => {
            return { accessToken, refreshToken };
          });
        })
        .then(authTokens => {
          res
            .header("x-refresh-token", authTokens.refreshToken)
            .header("x-access-token", authTokens.accessToken)
            .send(user);
        });
    })
    .catch(e => res.status(400).send(e));
};

exports.forgotPassword = (req, res) => {
  const email = req.body.email;
  User.findOne({ email })
    .then(user => {
      if (user) {
        user.createMail().then(mailOptions => {
          transporter.sendMail(mailOptions, (e, info) => {
            if (e) res.status(400).send(e);
            else res.status(200).send({ message: info });
          });
        });
      } else res.status(404).send({ error: "User not found" });
    })
    .catch(e => res.status(400).send(e));
};

exports.resetPassword = (req, res) => {
  const email = req.body.email;
  const newPassword = req.body.password;
  User.findOne({ email }).then(user => {
    if (user) {
      user.password = newPassword;
      user.resetPasswordToken.expiresAt = Date.now() / 1000;
      user.save();
      res.send(user);
    } else res.status(404).send({ error: "User not found" });
  });
};

// Checks if reset password token is valid
exports.checkResetToken = (req, res) => {
  const token = req.body.token;
  User.findOne({ "resetPasswordToken.token": token })
    .then(user => {
      if (user && user.resetPasswordToken.expiresAt > Date.now() / 1000) {
        res.send(user);
      } else res.status(404).send({ error: "Token not valid" });
    })
    .catch(e => res.status(400).send(e));
};

// Generates and returns an access token
exports.getAccessAuthToken = (req, res) => {
  req.userObject
    .generateAccessAuthToken()
    .then(accessToken => {
      // can get the token from headers or response body
      res.header("x-access-token", accessToken).send({ accessToken });
    })
    .catch(e => res.status(400).send(e));
};

exports.getCart = (req, res) => {
  const userId = req.params.userId;
  User.findById(userId)
    .then(user => {
      res.send(user.cart);
    })
    .catch(e => res.status(400).send(e));
};

exports.addToCart = (req, res) => {
  const userId = req.body.userId;
  const cartItem = req.body.cartItem;
  User.findById(userId)
    .then(user => {
      const cart = user.cart;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].product._id === cartItem.product._id) {
          user.cart.splice(i, 1);
          break;
        }
      }
      user.cart.push(cartItem);
      user.save();
      res.send(user.cart);
    })
    .catch(e => res.status(400).send(e));
};

exports.removeFromCart = (req, res) => {
  const userId = req.body.userId;
  const product = req.body.product;
  User.findById(userId)
    .then(user => {
      const newCart = user.cart.filter(el => el.product._id !== product._id);
      user.cart = newCart;
      user.save();
      res.send(user.cart);
    })
    .catch(e => res.status(400).send(e));
};

exports.clearCart = (req, res) => {
  const userId = req.body.userId;
  User.findById(userId)
    .then(user => {
      user.cart = [];
      user.save();
      res.send(user.cart);
    })
    .catch(e => res.status(400).send(e));
};

// HELPERS

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "majkonserver@gmail.com",
    pass: "hp l1706"
  }
});

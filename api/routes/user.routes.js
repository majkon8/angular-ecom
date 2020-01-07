const {
  verifySession,
  authenticate,
  adminAuthenticate
} = require("../middleware");

module.exports = app => {
  const users = require("../controlers/user.controler");

  /* GET /users/:id */
  app.get("/users/:id", authenticate, users.findUser);

  /* GET /users */
  app.get("/users", [authenticate, adminAuthenticate], users.findAll);

  /* POST /users */
  app.post("/users", users.signup);

  /* POST /users/login */
  app.post("/users/login", users.login);

  /* PATCH /users/:id */
  app.patch("/users/:id", authenticate, users.update);

  /* POST /users/forgot */
  // Handles forgot password form
  app.post("/users/forgot-password", users.forgotPassword);

  /* POST /users/reset */
  // Handles reset password form
  app.patch("/users/reset-password", users.resetPassword);

  /* POST /users/reset/check-token */
  // Checks if reset password token is valid before user enters reset page
  app.post("/users/reset/check-token", users.checkResetToken);

  /* GET /users/me/access-token */
  // Generates and returns an access token
  app.get("/users/me/access-token", verifySession, users.getAccessAuthToken);

  /* GET /users/:id/cart */
  app.get("/users/:userId/cart", authenticate, users.getCart);

  /* PATCH /users/cart/add */
  // Adds new product to cart
  app.patch("/users/cart/add", authenticate, users.addToCart);

  /* PATCH /users/cart/remove */
  // Deletes product from cart
  app.patch("/users/cart/remove", authenticate, users.removeFromCart);

  /* PATCH /users/cart /clear */
  // Removes all items from cart
  app.patch("/users/cart/clear", authenticate, users.clearCart);
};

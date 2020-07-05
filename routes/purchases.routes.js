const { authenticate, adminAuthenticate } = require("../middleware");

module.exports = app => {
  const purchases = require("../controlers/purchase.controler");

  /* GET /purchases */
  app.get("/purchases", [authenticate, adminAuthenticate], purchases.findAll);

  /* GET /purchases/:userId */
  app.get("/purchases/:userId", authenticate, purchases.findAllForUser);

  /* POST /purchases */
  app.post("/purchases", authenticate, purchases.create);
};

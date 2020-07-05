const { authenticate, adminAuthenticate } = require("../middleware");

module.exports = (app) => {
  const products = require("../controlers/product.controler");

  /* GET /products */
  app.get("/products", products.findAll);

  /* GET /products/:id */
  app.get("/products/:id", products.findOne);

  /* POST /products */
  app.post("/products", [authenticate, adminAuthenticate], products.create);

  /* PATCH /products */
  app.patch("/products", [authenticate, adminAuthenticate], products.update);

  /* DELETE /products/:id */
  app.delete(
    "/products/:id",
    [authenticate, adminAuthenticate],
    products.delete
  );
};

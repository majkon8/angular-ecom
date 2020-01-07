const express = require("express");
const bodyParser = require("body-parser");
const { handleCORS } = require("./middleware");
require("./mongoose");
require("./middleware");

const app = express();

app.use(bodyParser.json());

app.use(handleCORS);

require("./routes/user.routes")(app);
require("./routes/products.routes")(app);
require("./routes/purchases.routes")(app);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

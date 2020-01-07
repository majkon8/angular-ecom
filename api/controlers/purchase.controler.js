const Purchase = require("../models//purchase.model");
const async = require("async");

// GET ALL PURCHASES
exports.findAll = (req, res) => {
  Purchase.find()
    .then(purchases => res.send(purchases))
    .catch(e => res.status(400).send(e));
};

// GET ALL PURCHASES FOR SINGLE USER
exports.findAllForUser = (req, res) => {
  const userId = req.params.userId;
  Purchase.find({ _userId: userId })
    .then(purchases => res.send(purchases))
    .catch(e => e.status(400).send(e));
};

// CREATE NEW PURCHASE
exports.create = (req, res) => {
  const arrayOfPurchases = req.body.arrayOfPurchases;
  async.each(
    arrayOfPurchases,
    purchase => {
      const newPurchase = new Purchase(purchase);
      newPurchase
        .save()
        .then(() => res.send({ success: "Purchase was successful" }));
    },
    e => res.status(400).send(e)
  );
};

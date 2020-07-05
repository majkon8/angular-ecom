const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema({
  product: {
    type: Object,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  _userId: {
    type: String,
    required: true,
    unique: false
  },
  shippingDetails: {
    type: {
      firstName: {
        type: String
      },
      lastName: {
        type: String
      },
      street: {
        type: String
      },
      city: {
        type: String
      },
      country: {
        type: String
      },
      postcode: {
        type: String
      }
    },
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model("Purchase", PurchaseSchema);

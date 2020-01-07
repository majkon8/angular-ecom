const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
    unique: true
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true
  },
  shortDescription: {
    type: String,
    required: true,
    trim: true,
    default:
      "Nunc non velit est. Sed ac vulputate mauris, et convallis urna. Integer viverra felis at lectus ultrices euismod."
  },
  longDescription: {
    type: String,
    required: true,
    trim: true,
    default:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet euismod ante, vitae dapibus magna. Cras tortor arcu, sodales non faucibus ut, pretium id velit. Quisque vel elit at eros placerat placerat vel at eros. Quisque venenatis sapien eu augue suscipit posuere. Praesent vitae risus mi. Donec commodo tortor nec felis ullamcorper luctus. Praesent finibus, ante et finibus ullamcorper, mi enim interdum justo, ac suscipit ipsum odio a nisi. Fusce dapibus tincidunt nisl, laoreet imperdiet nulla scelerisque nec. Sed maximus bibendum leo vel cursus."
  },
  price: {
    type: Number,
    required: true
  },
  tag: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model("Product", ProductSchema);

const mongoose = require("mongoose");

const { Schema } = mongoose;
var { ObjectId } = require('mongodb').ObjectId

const petSchema = new Schema(
  {
    petname: {
      type: String,
      required: "Pet name is required",
    },

    age: {
      type: Number,
    },

    breed: {
      type: String,
      required: "Pets breed is required",
    },

    note: {
      type: String,
      max: 1000,
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    image: {
      data: Buffer,
      contentType: String,
    },

    type: {
      type: String,
    },
  },
  { timestamps: true }
);

const petModel = mongoose.model("Pet", petSchema);

module.exports = petModel;

const mongoose = require("mongoose");

const { Schema } = mongoose;
const { OBjectId } = mongoose.Schema;

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
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

    image: {
      type: Buffer,
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

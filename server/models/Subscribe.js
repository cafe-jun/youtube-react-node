const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscribeSchma = mongoose.Schema(
     {
          userTo: {
               type: Schema.Types.ObjectId,
               ref: "User",
          },
          userFrom: {
               type: Schema.Types.ObjectId,
               ref: "User",
          },
     },
     { timestamps: true }
);

const Subscribe = mongoose.model("Subscribe", subscribeSchma);

module.exports = { Subscribe };

const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const componentSchema = Schema(
  {
    
    ADDAPICOUNT: {
      type: Number,
      required: true,
      default: 0,
    },
    UPDATEAPICOUNT: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = model("ApiCount", componentSchema);




const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Restaurant name is required"],
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [100, "Name must be at most 100 characters"],
    trim: true
  },

  city: {
    type: String,
    required: [true, "City is required"],
    trim: true,
    lowercase: true
  },

  country: {
    type: String,
    required: [true, "Country is required"],
    trim: true
  },

  cuisines: {
    type: String,
    required: [true, "At least one cuisine is required"],
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: "Please add at least one cuisine"
    }
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
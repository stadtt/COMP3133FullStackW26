const mongoose = require('mongoose')

const UserSchema  = new mongoose.Schema({

    username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [4, "Username must be at least 4 characters"],
    maxlength: [100, "Username cannot exceed 100 characters"],
    trim: true
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address"
    ]
  },

  city: {
    type: String,
    required: [true, "City is required"],
    trim: true,
    match: [
      /^[A-Za-z\s]+$/,
      "City can contain only alphabets and spaces"
    ]
  },

  website: {
    type: String,
    required: [true, "Website URL is required"],
    match: [
      /^https?:\/\/.+/,
      "Website must be a valid http or https URL"
    ]
  },

  zipcode: {
    type: String,
    required: [true, "Zip code is required"],
    match: [
      /^\d{5}-\d{4}$/,
      "Zip code must be in format 12345-1234"
    ]
  },

  phone: {
    type: String,
    required: [true, "Phone number is required"],
    match: [
      /^\d-\d{3}-\d{3}-\d{4}$/,
      "Phone must be in format 1-123-123-1234"
    ]
  }


})

module.exports = mongoose.model("Users", UserSchema)







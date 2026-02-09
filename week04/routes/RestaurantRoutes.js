const express = require('express');
const app = express();
const Restaurant = require("../models/Restaurant");


app.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await Restaurant.find(); // selects all columns
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.get("/restaurants/cuisine/:cuisine", async (req, res) => {
  try {
    const cuisineType = req.params.cuisine;

    const restaurants = await Restaurant.find({
      cuisines: cuisineType
    });

    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/restaurants", async (req, res) => {
  try {
    const sortParam = req.query.sortBy;

    // If sortBy exists → return selected columns + sorting
    if (sortParam) {
      let sortOrder = sortParam === "DESC" ? -1 : 1;

      const restaurants = await Restaurant.find(
        {},
        "cuisines name city restaurant_id"
      ).sort({ restaurant_id: sortOrder });

      return res.status(200).json(restaurants);
    }

    // Otherwise → return all columns
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.post("/restaurants", async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    const savedRestaurant = await restaurant.save();

    res.status(201).json(savedRestaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = app
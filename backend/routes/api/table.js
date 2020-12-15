const express = require("express");
const router = express.Router();
const Hotel = require("../../database/model");

router.get("/", async (req, res) => {
  try {
    const tables = await Hotel.find();
    res.send(tables);
  } catch (error) {
    res.send("all tables");
  }
});

router.get("/:table_id", async (req, res) => {
  try {
    const table = await Hotel.findById(req.params.table_id);
    res.send(table);
  } catch (error) {
    res.send("all tables");
  }
});

router.post("/", async (req, res) => {
  try {
    await Hotel.create({
      table_id: req.body.table_id,
      people: 4,
      CustomerName: req.body.CustomerName,
      booked: true,
    });
    res.json({ message: "user registered" });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:table_id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.table_id);
    res.json({ message: "table removed" });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Get single contacts ${req.params.id}` });
});

router.route("/").post((req, res) => {
  res.status(200).json({ message: "Create contacts" });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update contacts ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `Delete contacts ${req.params.id}` });
});

module.exports = router;

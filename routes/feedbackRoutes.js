const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

const {
  getFeedbacks,
  getFeedback,
  createFeedback,
  updateFeedback,
  deleteFeedback,
} = require("../controllers/FeedbackController");

router.route("/").get(getFeedbacks).post(createFeedback);
router
  .route("/:id")
  .get(getFeedback)
  .put(updateFeedback)
  .delete(deleteFeedback);

module.exports = router;

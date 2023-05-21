const asyncHandler = require("express-async-handler");
const Feedback = require("../models/FeedbackModel");

//@desc Get all Feedbacks
//@route GET /api/Feedbacks
//@access public
const getFeedbacks = asyncHandler(async (req, res) => {
  const feedback = await Feedback.find();
  res.status(200).json(feedback);
});

//@desc create Feedbacks
//@route POST /api/Feedbacks
//@access public
const createFeedback = asyncHandler(async (req, res) => {
  console.log("The body of the request", req.body);
  const { title, description, like, submitterName, submitterEmail } = req.body;
  if (!title || !description || !like || !submitterName || !submitterEmail) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const feedback = await Feedback.create({
    title,
    description,
    like,
    submitterName,
    submitterEmail,
  });
  res.status(201).json(feedback);
});

//@desc get Feedbacks
//@route GET /api/Feedbacks/:id
//@access public
const getFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);
  if (!feedback) {
    res.status(404);
    throw new Error("No Feedback found");
  }
  res.status(200).json(feedback);
});

//@desc update Feedback
//@route PUT /api/Feedbacks/:id
//@access public
const updateFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);
  if (!feedback) {
    res.status(404);
    throw new Error("No Feedback found");
  }
  console.log("before update", feedback);
  const updatedFeedback = await Feedback.findByIdAndUpdate(
    "646a21356bf25d08c9b4f70f",
    req.body,
    {
      new: true,
    }
  );
  console.log(updatedFeedback, "updatedFeedbackupdatedFeedback");
  res.status(200).json(updatedFeedback);
});

//@desc Delete Feedback
//@route GET /api/Feedbacks/:id
//@access public
const deleteFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);
  if (!feedback) {
    res.status(404);
    throw new Error("No Feedback found");
  }
  const deletedFeedback = await Feedback.deleteOne({ _id: feedback._id });
  res.status(200).json(deletedFeedback);
});

module.exports = {
  getFeedbacks,
  getFeedback,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};

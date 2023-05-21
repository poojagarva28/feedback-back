const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add the Feedback name"],
    },
    description: {
      type: String,
      required: [true, "Please add the Feedback description"],
    },
    like: {
      type: String,
      required: [true, "Please add the Feedback like"],
    },
    submitterName: {
      type: String,
      required: [true, "Please add the Feedback submitter name"],
    },
    submitterEmail: {
      type: String,
      required: [true, "Please add the Feedback submitter email"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("feedback", feedbackSchema);

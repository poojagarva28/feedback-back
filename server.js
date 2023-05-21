const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
connectDb();
const app = express();
const dotenv = require("dotenv").config();

const port = process.env.PORT || 6000;

app.use(express.json());
app.use(cors());

app.use("/api/Feedback", require("./routes/feedbackRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

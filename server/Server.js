const express = require("express");
const cors = require("cors");
const jobs = require("./jobs.json");

const app = express();
app.use(cors());

app.use(express.json());

// Define a route for the root URL (/)
app.get("/", (req, res) => {
  res.json({ ...jobs, message: "hello world" });
});

app.get("/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.jobs[id - 1];
  res.send(job);
});

let port = 3001;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

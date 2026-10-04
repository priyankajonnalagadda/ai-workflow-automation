const express = require("express");
const bodyParser = require("body-parser");
const workflowRoutes = require("./routes/workflowRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/api/workflows", workflowRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
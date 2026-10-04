const express = require("express");
const router = express.Router();

const {
  createWorkflow,
  triggerWorkflow,
  getWorkflows
} = require("../controllers/workflowController");

router.post("/", createWorkflow);
router.post("/:id/trigger", triggerWorkflow);
router.get("/", getWorkflows);

module.exports = router;
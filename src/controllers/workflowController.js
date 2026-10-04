const { v4: uuidv4 } = require("uuid");
const workflowService = require("../services/workflowService");

let workflows = [];

exports.createWorkflow = (req, res) => {
  const { name, steps } = req.body;

  const workflow = {
    id: uuidv4(),
    name,
    steps
  };

  workflows.push(workflow);

  res.json({ message: "Workflow created", workflow });
};

exports.getWorkflows = (req, res) => {
  res.json(workflows);
};

exports.triggerWorkflow = async (req, res) => {
  const { id } = req.params;

  const workflow = workflows.find(w => w.id === id);
  if (!workflow) {
    return res.status(404).json({ message: "Workflow not found" });
  }

  try {
    const results = await workflowService.executeWorkflow(workflow);
    res.json({ message: "Workflow executed", results });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const URL = require("../models/task");

async function handlePostTask(req, res) {
  const body = req.body;
  try {
    await URL.create({
      title: body.title,
      completed: body.completed,
    });
    res.status(200).json({ task: "updated" });
  } catch (err) {
    console.error("MongoDB Error:", err);
    res.status(500).json({ error: "Failed to create task" });
  }
}

async function handleGetTask(req, res) {
  try {
    const data = await URL.find();
    res.status(200).json(data);
  } catch (err) {
    console.log("Error", err);
  }
}

async function handlePatchTask(req, res) {
  try {
    const id = await req.params.id;
    const item = await URL.findOneAndUpdate(
      { _id: id },
      { $set: { completed: true } }
    );
    if (!item) {
      res.status(404).json({ message: "Item not Found" });
    } else {
      res.status(200).send(item);
      res.json({ message: "item updated successfully" });
    }
  } catch (err) {
    console.log("Error", err);
  }
}

async function handleDeleteTask(req, res) {
  try {
    const id = await req.params.id;
    const item = await URL.findOneAndDelete({ _id: id });
    if (!item) {
      res.status(404).json({ message: "Item not Found" });
    } else {
      res.status(200).json({ message: "Item Deleted Scuccessfully" });
    }
  } catch (err) {
    console.log("Error", err);
  }
}
async function handleGetById(req, res) {
  try {
    const id = await req.params.id;
    const item = await URL.find({ _id: id });
    if (!item) {
      res.status(404).json({ message: "Item not Found" });
    } else {
      res.status(200).json(item);
    }
  } catch (err) {
    console.log("Error", err);
  }
}
module.exports = {
  handleDeleteTask,
  handleGetById,
  handleGetTask,
  handlePatchTask,
  handlePostTask,
};

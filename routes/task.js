const express = require("express");
const router = express.Router();
const {
  handleDeleteTask,
  handleGetById,
  handleGetTask,
  handlePatchTask,
  handlePostTask,
} = require("../controller/task");

router.route("/").get(handleGetTask).post(handlePostTask);

router
  .route("/:id")
  .get(handleGetById)
  .patch(handlePatchTask)
  .delete(handleDeleteTask);

module.exports = router;

const express = require("express");
const router = express.Router();

// localhost:5000/api/users/test
// serves json instead of text, 200 status by default

// @route   GET api/users/test
// @desc    tests users route
// @access  public
router.get("/test", (req, res) =>
  res.json({
    message: "users works"
  })
);

// export router to get picked up

module.exports = router;

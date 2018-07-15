const express = require("express");
const router = express.Router();

// localhost:5000/api/posts/test
// serves json instead of text, 200 status by default

// @route   GET api/posts/test
// @desc    tests posts route
// @access  public
router.get("/test", (req, res) =>
  res.json({
    message: "posts works"
  })
);

// export router to get picked up

module.exports = router;

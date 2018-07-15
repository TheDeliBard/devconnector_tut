const express = require("express");
const router = express.Router();

// localhost:5000/api/profile/test
// serves json instead of text, 200 status by default

// @route   GET api/profile/test
// @desc    tests profile route
// @access  public
router.get("/test", (req, res) =>
  res.json({
    message: "profile works"
  })
);

// export router to get picked up

module.exports = router;

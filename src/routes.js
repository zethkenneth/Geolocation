const router = require("express").Router();

const geo = require("./controllers/index.js");

router.use("/geo", geo);

module.exports = router;

const router = require("express").Router();
const geo = require("../services/index.js");

router.post("/find_treasure", async (request = req, response = res) => {
   const result = await geo.geoLoc(request);


  return response.status(200).send(result);
});



module.exports = router;

const router = require("express").Router();
const geo = require("../services/index.js");

const validateRequest = (req, res, next) => {
  const { latitude, longitude, distance, prizeValue } = req.body;

  if (!latitude || !longitude || !distance) {
    return res
      .status(400)
      .send("Latitude, longitude, and distance are required.");
  }

  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);
  const dist = parseInt(distance);

  if (isNaN(lat) || isNaN(lon) || ![1, 10].includes(dist)) {
    return res.status(400).send("Invalid latitude, longitude, or distance. the distance must be 1 or 10 only");
  }

  if (prizeValue !== undefined) {
    const prize = parseInt(prizeValue);
    const s_prize = prizeValue.toString();
    if (isNaN(prize) || prize < 10 || prize > 30 || s_prize.includes(".")) {
      return res
        .status(400)
        .send(
          "Invalid prize value. Must be a whole number between $10 and $30."
        );
    }
  }

  req.lat = lat;
  req.lon = lon;
  req.dist = dist;
  req.prize = prizeValue ? parseInt(prizeValue) : undefined;
  next();
};

router.post(
  "/find_treasure",
  validateRequest,
  async (req, res) => {
    const result = await geo.geoLoc(req);

    return res.status(200).json({
      message: "here are the treasures you won ",
      prizes: result,
    });
  }
);



module.exports = router;

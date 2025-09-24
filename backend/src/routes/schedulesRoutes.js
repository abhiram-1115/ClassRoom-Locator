import express from "express";

const router = express.Router();

// Example GET API
router.get("/", (req, res) => {
  res.json({ message: " Schedules API working!" });
});

export default router;

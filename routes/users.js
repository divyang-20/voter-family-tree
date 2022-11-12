import express from "express";
import users from "../data.json" assert { type: "json" };

const router = express.Router();

router.get("/", (req, res) => {
  res.send(users);
});
router.get("/search", (req, res) => {
  const { id } = req.query;
  const user = users.find((user) => user.id === parseInt(id));
  res.send(user);
});

export default router;

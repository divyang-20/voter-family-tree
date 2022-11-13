import express from "express";
import users from "../data.json" assert { type: "json" };

const router = express.Router();

router.get("/", (req, res) => {
  const { state, district, name, fname, age, gender, id } = req.query;
  let sarr = [],
    darr = [],
    narr = [],
    farr = [],
    aarr = [],
    garr = [],
    iarr = [],
    main = [];
  for (var i = 0; i < users.length; i++) {
    if (state && users[i].state === state) sarr.push(i);
    if (!state) sarr.push(i);
    if (district && users[i].district === district) darr.push(i);
    if (!district) darr.push(i);
    if (name && users[i].name === name) narr.push(i);
    if (!name) narr.push(i);
    if (fname && users[i].fname === fname) farr.push(i);
    if (!fname) farr.push(i);
    if (age && users[i].age === parseInt(age)) aarr.push(i);
    if (!age) aarr.push(i);
    if (gender && users[i].gender === gender) garr.push(i);
    if (!gender) garr.push(i);
    if (id && users[i].id === parseInt(id)) iarr.push(i);
    if (!id) iarr.push(i);
  }
  for (var i = 0; i < users.length; i++) {
    if (
      sarr.includes(i) &&
      darr.includes(i) &&
      narr.includes(i) &&
      farr.includes(i) &&
      aarr.includes(i) &&
      garr.includes(i) &&
      iarr.includes(i)
    ) {
      main.push(i);
    }
  }
  for (var i = 0; i < main.length; i++) {
    res.send(users[main[i]]);
  }
});

export default router;

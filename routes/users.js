import express from "express";
import users from "../data.json" assert { type: "json" };

const router = express.Router();

function filterLower(s) {
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] != " ") ans += s[i];
  }
  ans = ans.toLowerCase();
  return ans;
}

router.get("/", (req, res) => {
  const { state, district, name, fname, age, gender, id } = req.query;
  let sarr = [],
    darr = [],
    narr = [],
    farr = [],
    aarr = [],
    garr = [],
    iarr = [],
    main = [],
    data = [];
  for (var i = 0; i < users.length; i++) {
    if (state && filterLower(users[i].state) === filterLower(state))
      sarr.push(i);
    if (!state) sarr.push(i);
    if (district && filterLower(users[i].district) === filterLower(district))
      darr.push(i);
    if (!district) darr.push(i);
    if (name && filterLower(users[i].name) === filterLower(name)) narr.push(i);
    if (!name) narr.push(i);
    if (fname && filterLower(users[i].fname) === filterLower(fname))
      farr.push(i);
    if (!fname) farr.push(i);
    if (age && users[i].age === parseInt(age)) aarr.push(i);
    if (!age) aarr.push(i);
    if (gender && filterLower(users[i].gender) === filterLower(gender))
      garr.push(i);
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
  // console.log("main-->", main);
  console.log("lower-->", filterLower("Divyang Maurya"));
  for (var i = 0; i < main.length; i++) {
    data.push(users[main[i]]);
  }
  res.send(data);
});

export default router;

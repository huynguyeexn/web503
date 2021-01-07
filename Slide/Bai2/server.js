const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  let today = new Date();
  currentDay = today.getDay();
  let day = "";
  switch (currentDay) {
    case 0:
      day = "Chủ nhật";
      break;

    case 1:
      day = "Thứ hai";
      break;
    case 2:
      day = "Thứ ba";
      break;
    case 3:
      day = "Thứ tư";
      break;
    case 4:
      day = "Thứ năm";
      break;
    case 5:
      day = "Thứ 6";
      break;
    case 6:
      day = "Thứ 7";
      break;
  }
  res.render("home", { kindOfDay: day });
});

app.listen(port, () => {
  console.log(`Server start with port ${port}`);
});

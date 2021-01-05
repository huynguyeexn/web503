const exp = require("express");
const app = exp();
const port = 3000;
app.get("/", (req, res) => {
  res.send("<h1>Đây là trang home</h1>");
});
app.listen(port, () => {
  console.log(`Ung dung dang chay voi port ${port}`);
});

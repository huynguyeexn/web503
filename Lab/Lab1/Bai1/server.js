const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded());

let inventors = [
  { id: 1, first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { id: 2, first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { id: 3, first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { id: 4, first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { id: 5, first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { id: 6, first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
];

app.get("/", (req, res) => {
  let list = `<h2>Danh sách nhà khoa học <a href="/add">Add new</a><ul>`;
  inventors.forEach((e) => {
    list += `<li><a style="text-decoration:none;color:green;" href="/inventor/${e.id}">${e.last}</a></li>`;
  });
  list += "</ul></h2>";
  res.send(list);
});

app.get("/inventor/:id", (req, res) => {
  let id = req.params.id;
  inventor = inventors.find((x) => x.id == id);
  res.json(inventor);
});

app.get("/add", (req, res) => {
  let list = "<h2>Thêm nhà khoa học<ul>";
  list += `
    <form method="post" action="">
    <table>
      <tr>
      <td>
        <label>Fisrt Name: </label>
        <input type="text" name="fisrt" />
      </td>
      </tr>
      <tr>
      <td>
        <label>Last Name: </label>
        <input type="text" name="last" />
      </td>
      </tr>
      <tr>
      <td>
        <label>Birth Year: </label>
        <input type="number" name="year" />
      </td>
      </tr>
      <tr>
      <td>
        <label>Passed Year: </label>
        <input type="number" name="passed" />
      </td>
      </tr>
    </table>
    <button type="submit">Add</button>
    </form>
    `;
  res.send(list);
});

app.post("/add", (req, res) => {
  let newInventor = req.body;
  newInventor.id = inventors.length + 1;
  inventors.push(newInventor);
  res.redirect("/");
});
app.listen(port, () => {
  console.log(`Ứng dụng đang chạy với port: ${port}`);
});

require("dotenv").config();
const express = require("express");
const formRoutes = require("./routes/formRoutes");
const { PORT } = require("./config/config");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send(" Fillout API Server for Take Home Assessment");
});

app.use("/", formRoutes);

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});

const express = require("express");
const cors = require("cors");
const fileRouter = require("./routes/fileRoute");

const app = express();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 5000;

app.use("/file", fileRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

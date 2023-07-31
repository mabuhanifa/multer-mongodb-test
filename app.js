const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fileRouter = require("./routes/fileRoute");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {},
});

const uploader = multer({
  dest: "uploads/",
});

const app = express();
app.use(express.json());

app.use(cors());

const port = process.env.PORT || 5000;

app.use("/", fileRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

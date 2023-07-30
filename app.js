const express = require("express");
const cors = require("cors");
const multer = require("multer");

const uploader = multer({
  dest: "uploads/",
});

const app = express();
app.use(express.json());

app.use(cors());

const port = process.env.PORT || 5000;

app.post("/file", uploader.single("image"), async (req, res) => {
  try {
    res.status(200).json(req.file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

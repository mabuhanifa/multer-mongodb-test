const { Router } = require("express");
const { fileUploader } = require("../controller/fileController");
const uploader = require("../middleware/uploader");

const router = Router();

router.route("/").post(
  uploader.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "fileLink", maxCount: 10 },
  ]),
  fileUploader
);

module.exports = router;

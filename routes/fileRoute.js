const { Router } = require("express");
const { fileUploader } = require("../controller/fileController");

const router = Router();

router.route("/file").post(fileUploader);

module.exports = router;

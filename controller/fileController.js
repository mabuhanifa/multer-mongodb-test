const fileUploader = async (req, res) => {
  try {
    const thumbnail = req.files["thumbnail"][0].path
    const fileLinks = req.files["fileLink"].map((file) => file.path);
    res.status(200).json({ thumbnail, fileLinks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { fileUploader };

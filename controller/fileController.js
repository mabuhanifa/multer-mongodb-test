const fileUploader = async (req, res) => {
  try {
    res.status(200).json(req.file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { fileUploader };

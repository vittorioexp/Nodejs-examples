
const notFound = (req,res) => {res.status(404).send("File not found")};

module.exports = notFound;
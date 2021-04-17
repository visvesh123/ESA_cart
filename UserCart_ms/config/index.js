const dotenv = require("dotenv");

dotenv.config()

module.exports = {
    PORT: process.env.PORT || 3002,
    MONGO_URI:
    'mongodb+srv://m001-student:qscgy@Q10@cluster0.zjijz.mongodb.net/Shopping2?retryWrites=true&w=majority',
   
  };
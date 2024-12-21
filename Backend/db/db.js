const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MongoDB URI is not defined in environment variables");
  }
  await mongoose.connect(uri);
  console.log("MongoDB connected...");
};

module.exports = connectDB;

// const mongoose = require("mongoose");
// function connectDB() {
//   mongoose
//     .connect(process.env.DB_CONNECT)
//     .then(() => {
//       console.log("Connected to DB");
//     })
//     .catch((err) => console.log(err));
// }

// module.exports = connectDB;

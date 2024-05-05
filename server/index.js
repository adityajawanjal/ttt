const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const router = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();
const app = express();
connectDB();

app.use(
  cors({
    origin:"https://ttt-liard.vercel.app",
    credentials: true,
  })
);
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methods','GET , HEAD , POST , PUT , DELETE , OPTIONS');
  res.header('Access-Control-Allow-Headers','Origin , X-Requested-With , Content-Type , Accept , Authorization');
  next();
});
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is listening on PORT : ${port}`);
});

require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const categoryRoutes=require("./routes/categoryRoute")
const productRoutes=require("./routes/productRoute")
const connectDB = require('./config/dbconfig');
const dbURI = 'mongodb://mongo_db:27017/auth-db';
const app = express();
const PORT = process.env.PORT || 4001;
const {Server}=require("socket.io")
const http=require("http")
const server=http.createServer(app)
const io=new Server(server)

// Connect to DB
// connectDB();
connectDB(); 

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173', // React front-end URL
  // credentials: true,               // Allow cookies to be sent with requests
}));

// Routes
app.use('/auth', authRoutes);
app.use("/auth2",categoryRoutes)
app.use("/auth3",productRoutes)

app.get('/',(req,res)=>{
  res.send("hello backend")
})
app.listen(PORT, () => {
  console.log(`Auth server running on port ${PORT}`);
});


var arr=[1,3,4,7,8,2]
var target=9

function twoSum(arr,target){
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length;j++){
      if(i !==j){
        if(arr[i] + arr[j] == target){
          console.log(i,j,"rajesh")
        }
      }
    }
  }
}
twoSum(arr,target)
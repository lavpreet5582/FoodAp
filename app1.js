// npm init -y
// npm i express
const express = require('express');

const path = require("path");
const cookieParser = require('cookie-parser');
const userRouter = require('./Router/userRouter');
const authRouter = require('./Router/authRouter');
const planRouter = require('./Router/planRouter');
const reviewRouter = require('./Router/reviewRouter');
const bookingRouter = require('./Router/bookingRouter');
// Server: // route  -> request -> response/file 
// File system// path -> interact/type -> file /folder
// server init
const app = express();
// this line 
// post -> /
// app.post("/", function (req, res, next) {
//     let body = req.body;
//     console.log("before", body);
//     next();
// })
// inbuilt menthods of express has next already implmeneted
// always use me
//  express json -> req.body add
// reserve a folder only from which client can acces the files 
app.use(express.static("public/build"));
app.use(express.json());
app.use(cookieParser());
// // function -> route  path
// // frontend -> req -> /
// read data storage
// localhost/user/10 -> post 
// let content = JSON.parse(fs.readFileSync("./data.json"));
// // localhost / auth / 10-> patch
app.use('/api/user', userRouter);
app.use("/api/plan", planRouter);
app.use('/api/auth', authRouter);
app.use('/api/review', reviewRouter);
app.use('/api/booking', bookingRouter);
const port = process.env.PORT||3000;
app.listen(port, function () {
    console.log("server started");
})
// 404 page
app.use(function (req, res) {
    // console.log("fullPath", fullPath);
    res.status(404).sendFile
        (path.join(__dirname, "404.html"));
})




// app.get("/", function (req, res) {
//     console.log("hello from home page")
//     // res.send("<h1>Hello from Backend</h1>");
//     res.status(200).json(
//         { message: content }
//     )
// })
// app.put("/", function (req, res) {
//     console.log("hello from home page")
//     res.send("<h1>Hello from Backend</h1>");
// })
// app.update("/", function (req, res) {
//     console.log("hello from home page")
//     res.send("<h1>Hello from Backend</h1>");
// })
// app.delete("/", function (req, res) {
//     console.log("hello from home page")
//     res.send("<h1>Hello from Backend</h1>");
// })
// app.get("/user", function (req, res) {
//     console.log("users")
//     // for sending key value pair
//     res.json(obj);
// })
// //localhost:8080 ??
// / port, ip,localhost
// app.post("/", function (req, res, next) {
        //     let body = req.body;
        //     console.log("inside first post", body);
        //     next();
        // })
        // app.use(function (req, res, next) {
        //     console.log("inside app.use",)
        //     next();
        // })
        // app.get("/", function (req, res) {
        //     let body = req.body;
        //     console.log("inside first get", body);

        // })
        // app.post("/", function (req, res, next) {
        //     let body = req.body;
        //     console.log("inside second post ", body);
        //     res.send("tested next");
        // })
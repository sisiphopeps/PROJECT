// const {express, routes} = require('./controller')
// const path = require('path')
// const app = express()
// const cors = require('cors')
// const cookieParser = require('cookie-parser')
// const ErrorHandling = require('./middleware/ErrorHandling')
// const port =+process.env.PORT || 3000
// const Router = require('./routes/routes')

// app.use(Router);
// //static
// app.use(express.static('./static'))
// // Middleware - APplication level
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Methods", "*");
//     res.header("Access-Control-Request-Methods", "*");
//     res.header("Access-Control-Allow-Headers", "*");
//     res.header("Access-Control-Expose-Headers", "Authorization");
//     next();
//   });
//   app.use(
//     express.static('./static'),
//     express.urlencoded({
//         extended: false
//     }),
//     cookieParser(),
//     cors(),
//     routes
// )
//   // Handling all errors
//   app.use(ErrorHandling);
//   // Server

// routes.get('^/$|/challenger',(req, res)=>{
//     res.sendFile(path.resolve(__dirname,
//         "./static/html/index.html"))
// })
// //Handling all errors using middleware
// app.use(ErrorHandling)
// app.listen(port, ()=>{
//     console.log(`The server is running on port ${port}`);
// })

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Router =  require("./routes/routes.js");
const port =+process.env.PORT || 3000

// init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// use router
app.use(Router);

app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`);
})

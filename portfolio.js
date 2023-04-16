const express = require("express"); // express
const os = require("os"); // os
const cluster = require("cluster"); // cluster
const app = express(); // initilize express
const CORS = require("cors"); // CORS
const {Router} = require("./router"); // General Routing
const PostRequests = require('./Controller/Post Request/Post')
const GetRequests = require('./Controller/Get Request/Get')
const credential = require("./Secret/credential.js"); // credential
const port = credential.PORT || 5678 // Port

// Cors Configuration
/* Cors Allowed Domains*/ let Domain = [
  "theankan.live",
  "www.theankan.live",
  "localhost:5678",
];

// Cluster Configuration
let cpuCount = os.cpus().length;

if (cluster.isMaster) {
  while (cpuCount>0) {
    cluster.fork();
    cpuCount--;
  }
   cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
   });
}
else{
  
  app.use(CORS(Domain)); // setting up CORS
  app.listen(port, () => {
    console.log(`app listening at port No ${port}`);
  }); // listening port
  
  app.use(express.urlencoded({ extended: true })); //form data encoding
  app.use(express.json()); //Json Data Encoding
  app.use(express.static("static")); // serving static files
  app.use(Router); // linking File Routing
  app.use(PostRequests); // Linking All Post Requests Routing
  app.use(GetRequests); // Linking All Get Requests Routing
  
  // pug engine configuration
  app.set("view engine", "pug");
  app.set("views", "./static/blogs");

}


// 404 Page
app.get('*', (request, response) => {
  response.status(404).render('404', { title: '404 : Page Not Found', routes:'/', exit: 'Go To Home'});
});


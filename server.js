var express = require('express');
const multer  = require('multer');
const path = require("path");
const fs = require('fs');
var spawn = require("child_process").spawn; 

var app = express();
// const upload = multer({dest:'uploads/'});

app.use('/', express.static(__dirname + '/'));
app.listen(8080);

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './');
  },
  filename: function(req, file, cb) {
    cb(null, 'img.jpg');
  }
});
const upload = multer({
  storage: storage
});

// app.get('/data', function (req, res) {
//   res.send(req.query);
//   console.log(req.query);
// })
app.get('/data', function (req, res) {
  console.log(req.body);
  res.send('sent msg')
});


// const handleError = (err, res) => {
//   res
//     .status(500)
//     .contentType("text/plain")
//     .end("Oops! Something went wrong!");
// };


app.post(
  "/upload",
  upload.single("file" /* name attribute of <file> element in your form */),
  (req, res) => {
    console.log(req.file);
    console.log(req.body);
    // const tempPath = req.file.path;
    // const targetPath = path.join(__dirname, "");

    // if (path.extname(req.file.originalname).toLowerCase() === ".jpg") {
    //   fs.rename(tempPath, targetPath, err => {
    //     // if (err) return handleError(err, res);

    //     // res
    //     //   .status(200)
    //     //   .contentType("image/jpg")
    //     //   .end("File uploaded!");
    //   });
    // } 
    console.log('processing');
    var process = spawn('python',["./output_prediction.py"]); 
  
    // // Takes stdout data from script which executed 
    // // with arguments and send this data to res object 
    process.stdout.on('data', function(data) {
      console.log(data.toString()); 
      res.status(200).send(data.toString()); 
    }) 
  }
);
var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const fs = require('fs');

/* GET home page. */
router.get('/',urlencodedParser, function(req, res, next) {
  res.render('index', { title: 'Express' });

});

router.get('/getData',urlencodedParser, function(req, res, next) {
  fs.readFile("records.json", "utf8", function(error,data)
  {
    if(error) throw error; // если возникла ошибка
    console.log('GET REQ',JSON.parse(data));
    res.send(JSON.parse(data))
  });
});

router.post('/setData',urlencodedParser, function(req, res, next) {
  if(!req.body) return res.sendStatus(400);
  console.log('BODY',req.body);
  fs.writeFile("records.json", JSON.stringify(req.body), function(error,data)
  {
    if(error) throw error; // если возникла ошибка
    console.log("Асинхронная запись файла завершена. Содержимое файла:");
    fs.readFile("records.json", "utf8", function(error,data)
    {
      if(error) throw error; // если возникла ошибка
      console.log('GET REQ',JSON.parse(data));
    });
  });
});


module.exports = router;

//INICIALIZANDO EXPRESS
//@Autor: Saulo Daniel Medeiros
//Ajustes por Faber Xavier
var express = require("express");
var fs = require("fs");
var app = express();

//app.use(myHeader);
//function myHeader() {
//  app.setHeader('Access-Control-Allow-Origin','*');
//}

var pokemons = [];
//INICIALIZANDO MODULO DE LEITURA DE ARQUIVO

app.get("/pokemon/:id", function(req,res) {
   fs.readFile("./evolucao.json", "utf8", function (err, data) {
      //Transformando os dados lidos em um objeto JSON
      
      pokemons = JSON.parse(data);
        
      var poke = pokemons.filter(function(poke) {
        return (poke.Name === req.params.id);
      });       
      
      res.setHeader('Access-Control-Allow-Origin','*');
      res.end( JSON.stringify(poke));
   });
});

app.get("/pokemons", function(req,res) {
   fs.readFile("./evolucao.json", "utf8", function (err, data) {
      if (err == null)
      {
        try {
          res.setHeader('Access-Control-Allow-Origin','*');
          //Transformando os dados lidos em um objeto JSON
          
          pokemons = JSON.parse(data);
          var result = [];
          pokemons.forEach(function(currentValue){ 
            //console.dir(currentValue);       
            result.push(currentValue.Name);        
          });
          //console.log(result);
          
          res.end(JSON.stringify(result));
        }
        catch (ex) {
          res.end("Deu excecao: " + ex.message);
        }
      }
      else
      {
        res.end("Erro na leitura do arquivo: " + err);
      }

   });
});

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("app listening at http://%s:%s", host, port)
});

 
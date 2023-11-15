let path = require("path");
let express = require("express");
var formidable = require('formidable');
var mv = require('mv');
var count = 0;

var codes = [{code:"start", pg: "/public/views/index.html"}, 
{code:"play", pg:"/public/views/puzzle.html"}, 
{code:"afjKab!2", pg:"/public/views/window.html"}, 
{code:"ref", pg:"/public/views/ref.html"}, 
{code:"KEITH", pg:"/public/views/highlight.html"}, 
{code:"tail", pg:"/public/views/matrix.html"}, 
{code: "use that noggin of yours", pg:"/public/views/yay.html"}, 
{code: "hello, it's keith", pg:"/public/views/ref.html"}, 
{code: "This Game Stinks", pg:"/public/views/creature.html"}, 
{code: ":bigfoot", pg:"/public/views/equationImg.html"}, 
{code: "MyNameIsKeith", pg:"/public/views/morseCode.html"}]

let router = express.Router();

router.get("/checkRefPoint/:code",function(req,res){
	if(req.params.code == "/public/views/ref.html"){
		count ++;
		console.log("Count: " + count)
		if(count >= 3)
			res.json("I'm a Keith, I'm a weirdo")
		else 
			res.json(null)
	}
	else
		res.json(null)
});

router.get("/",function(request,response){
	response.sendFile(__dirname + "/public/views/index.html");
});
router.get("/getHint/:code",function(req,res){
	if (req.params.code == "Gorilla gorilla gorilla")
		res.json('Use That Noggin of Yours')
	else
		res.json("Your Answer Is Incorrect")
});
router.get("/puzzleCheck",function(req,res){
	console.log("Success")
	console.log(codes[2].code)
	res.json(codes[2].code)
});
router.get("/windowCheck/:code",function(req,res){
	if (codes[4].code == req.params.code){
		res.json(codes[4].code)
	}
	else
		res.json(null)
});
router.get("/highLightCheck/:code",function(req,res){
	if (codes[5].code == req.params.code.toLowerCase()){
		res.json(codes[5].code)
	}
	else
		res.json(null)
});
router.get("/morseCodeCheck/:code",function(req,res){
	if (codes[6].code == req.params.code.toLowerCase()){
		res.json(codes[6].code)
	}
	else
		res.json(null)
});
router.get("/matrixCheck/:code",function(req,res){
	if (codes[7].code == req.params.code.toLowerCase()){
		res.json(codes[7].code)
	}
	else
		res.json(null)
});
router.get("/refCheck",function(req,res){
	console.log("Count: " + count)
	if (count == 3){
		count = 0;
		res.json(codes[8].code)
	}
	else{
		count ++;
		res.json(null)
	}
});
router.get("/creatureCheck/:code",function(req,res){
	console.log("CODE: " +codes[9].code)
	console.log("REQ: " + req.params.code.toLowerCase())
	if (codes[9].code == req.params.code.toLowerCase()){
		res.json(codes[9].code)
	}
	else
		res.json(null)
});
router.get("/monkeyCheck",function(req,res){
	console.log("Success")
	res.json(codes[10].code)
});

router.get("/:code",function(request,response){
	console.log(request.params.code)
	for (i of codes){
		if (i.code == request.params.code){
			page = i.pg
			console.log(page)
			response.sendFile(__dirname + i.pg);
		}
	}
});


module.exports = router;
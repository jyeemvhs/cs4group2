let numImg;
let objImg;
let numCorrect = 0;
let spotOrig;
let numList = setList()
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

function setList(){
  let storeList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  let tempList = [];
  for(i = 0; i<25; i++){
    let temp = (Math.floor((Math.random())*(storeList.length-1)));
    tempList[i] = storeList[temp];
    storeList.splice(temp,1);
  }
  return tempList;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  numImg = ev.target.id.substr(4,ev.target.id.length-4)
  objImg = ev.target;
  spotOrig = ev.srcElement
  ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {
  if(spotOrig == ev.target || ev.target.id.substr(0,3) != "div"){
    return;
  }
if(ev.target.id.substr(3,ev.target.id.length-3) == numImg){
    objImg.correctSpot = true;
    numCorrect+=1;

  }
  else{
      if(objImg.correctSpot){
        numCorrect-=1;
      }
        objImg.correctSpot = false;
  }
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
 
  ev.target.appendChild(document.getElementById(data));
  for(i = 0; i<= numList.length; i++){
    if(numList[i] == numImg){
      numList.splice(0,1);
      addImg()
       
    }
  }
 
  if(numCorrect == 25){
      puzzleCheck();
    }
}
function addImg(){
  if(numList == null){
    return;
  }
  let imgName = "#drag" + numList[0]
  $(imgName).removeAttr("hidden");
 
}

function getHint(code){
$.ajax({
            url: "/getHint/" + code,
            type: "GET",
            success: function(data){
              if(data){
                $("#field").remove()
                $("#form").append(data);
              }
            } ,    
            dataType: "json"
          });
return false;
}
function puzzleCheck(){
$.ajax({
            url: "/puzzleCheck/",
            type: "GET",
            success: function(data){
              if(data){
                alert("Yay");
                $("#nextLvlPuzzle").attr('href', data)
                $("#nextPuzzle").attr('class', "button")
              }
            } ,
            dataType: "json"
          });   
return false;
      }
function windowCheck(code){
$.ajax({
            url: "/windowCheck/" + code,
            type: "GET",
            success: function(data){
              if(data){
                $("#nextLvlWindow").attr('href', data)
                $("#nextWindow").attr('class', "button")
              }
            } ,
            dataType: "json"
          });   
  return false;
      }
      function highLightCheck(code){
$.ajax({
            url: "/highLightCheck/" + code,
            type: "GET",
            success: function(data){
              if(data){
                alert("success");
                $("#nextLvlHighLight").attr('href', data)
                $("#nextHighLight").attr('class', "button")
              }
              else
                alert("Wrong! HAHAHAHA")
            } ,
            dataType: "json"
          });   
  return false;
      }
      function checkRefPoint(){
$.ajax({
            url: "/checkRefPoint/" + window.location.href,
            type: "GET",
            success: function(data){
              if(data){
                alert("success");
                $("#nextLvlHighLight").attr('href', data)
                $("#nextHighLight").attr('class', "button")
              }
            } ,
            dataType: "json"
          });   
  return false;
      }
function morseCodeCheck(code){
$.ajax({
            url: "/morseCodeCheck/" + code,
            type: "GET",
            success: function(data){
              if(data){
                alert("success");
                $("#nextLvlMorseCode").attr('href', data)
                $("#nextMorseCode").attr('class', "button")
              }
              else
                alert("Wrong! HAHAHAHA")
            } ,
            dataType: "json"
          });   
  return false;
      }
function matrixCheck(code){
$.ajax({
            url: "/matrixCheck/" + code,
            type: "GET",
            success: function(data){
              if(data){
                alert("success");
                console.log(data)
                $("#nextLvlMatrix").attr('href', data)
                $("#nextMatrix").attr('class', "button")
              }
              else
                alert("Wrong! HAHAHAHA")
            } ,
            dataType: "json"
          });   
return false;
      }
function refCheck(){
$.ajax({
            url: "/refCheck",
            type: "GET",
            success: function(data){
              if(data){
                alert("success");
                console.log(data)
                $("#nextLvlRef").attr('href', data)
                $("#nextRef").attr('class', "button")
              }
            } ,
            dataType: "json"
          });   
return false;
      }
function creatureCheck(code){
$.ajax({
            url: "/creatureCheck/:" + code,
            type: "GET",
            success: function(data){
              if(data){
                alert("success");
                console.log(data)
                $("#nextLvlCreature").attr('href', data)
                $("#nextCreature").attr('class', "button")
              }
              else{
                alert("Wrong! HAHAHAHA")
             }
            } ,
            dataType: "json"
          });   
return false;
      }
let numImg;
let objImg;
let stored = [0,0];
let spotOrig;
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

function setUp(){
  let tempList = [1,2,3,4,5]
  for(let i = 1; i<=5; i++){
    var stuff = Math.floor(Math.random() * tempList.length);

    //let tempDiv = document.getElementById("div" + i);
    let tempImg = document.getElementById("drag" + tempList[stuff]);
    document.getElementById("div" + i).appendChild(tempImg);
    tempList.splice(stuff,1);
    //setImg(document.getElementById(tempName));
  }
}


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  numImg = ev.target.id.substr(4,ev.target.id.length-4)
  objImg = ev.target;
  spotOrig = ev.srcElement
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(ev.target)
}

function drop(ev) {
  if(spotOrig == ev.target || ev.target.id.substr(0,3) != "div"){
    return;
  }
  if(ev.target.id.includes("Img")){
    stored[ev.target.id.substr(6,1)-1] = numImg;
    console.log(stored[ev.target.id.substr(6,1)-1])

  }
  else{
      if(objImg.imgSpot){
        numCorrect-=1;
      }
        objImg.imgSpot = false;
  }
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
 
  ev.target.appendChild(document.getElementById(data));
 
 
 
}

function submit(){
  console.log(stored[0] + " and " + stored[1])
  if(stored[0]==0 || stored[1]==0){
    alert("Do not leave any space blank")
    return;
  }
  if(stored[0]==1 && stored[1]==5){
   
      alert("yay")
      $("#nextLvlMonkey").attr('href', "MyNameIsKeith")
      $("#nextMonkey").attr('class', "button")
   
  }
  else if(stored[0]==5 && stored[1]==1){
      alert("yay")
      $("#nextLvlMonkey").attr('href', "MyNameIsKeith")
      $("#nextMonkey").attr('class', "button")
  }
  else{
    alert("ur bad");
    location.reload()
  }
}

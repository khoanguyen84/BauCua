let interval1;
let interval2;
let interval3;
let dice = document.getElementsByClassName('dice')[0];
let dice1 = dice.children[0];
let dice2 = dice.children[1];
let dice3 = dice.children[2];

function onClickButton(el){
    console.log(el.innerText);
    // debugger;
    if(el.innerText == 'Start'){
        el.setAttribute('class','btn btn-outline-danger');
        btnStar();
        el.innerText = 'Stop';
    } else if(el.innerText == 'Stop'){
        el.setAttribute('class','btn btn-outline-success');
        btnStop();
        el.innerText = 'Start';
    }
}

function btnStar(){
    randomDice();
}

function btnStop(){
    clearInterval(interval1);
    // clearInterval(interval2);
    // clearInterval(interval3);
}

function randomDice(){
    let term1,term2,term3;
    interval1 = setInterval(()=>{
        term1 = Math.floor(Math.random()*6+1);
        changeDice(term2,dice1);
        term2 = Math.floor(Math.random()*6+1);
        changeDice(term2,dice2);
        term3 = Math.floor(Math.random()*6+1);
        changeDice(term3,dice3);
    }, 100);
    // interval2 = setInterval(()=>{
    //     term2 = Math.floor(Math.random()*6+1);
    //     changeDice(term2,dice2);
    // }, 100);
    // interval3 = setInterval(()=>{
    //     term3 = Math.floor(Math.random()*6+1);
    //     changeDice(term3,dice3);
    // }, 100);
}

function changeDice(value, dice){
    switch(value) {
        case 1:
        dice.setAttribute('class','deer');
          break;
        case 2:
            dice.setAttribute('class','calabash');
          break;
          case 3:
            dice.setAttribute('class','chicken');
          break;
          case 4:
            dice.setAttribute('class','fish');
          break;
          case 5:
            dice.setAttribute('class','crab');
          break;
          
        default: dice.setAttribute('class','shrimp');
          // code block
      }
}
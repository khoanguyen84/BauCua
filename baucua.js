var naiResult = document.querySelector(".nai");
var bauResult = document.querySelector(".bau");
var gaResult = document.querySelector(".ga");
var tomResult = document.querySelector(".tom");
var cuaResult = document.querySelector(".cua");
var caResult = document.querySelector(".nai");

var overlay = document.querySelector(".overlay")
var start = document.querySelector(".start")
var openbtn = document.querySelector(".open")
var announced = document.querySelector(".announced")
let listObj = [{
        id: 1,
        name: "nai",
        node: naiResult
    },
    {
        id: 2,
        name: "bau",
        node: bauResult
    },
    {
        id: 3,
        name: "ga",
        node: gaResult
    },
    {
        id: 4,
        name: "tom",
        node: tomResult
    },
    {
        id: 5,
        name: "cua",
        node: cuaResult
    },
    {
        id: 6,
        name: "ca",
        node: caResult
    },
]


function showResult() {
    var randomFrom0To5 = Math.floor(Math.random() * 5 + 1)
    return randomFrom0To5
};

function resultDice(numberDice) {
    var arrResult = []
    for (let i = 0; i < numberDice; i++) {
        arrResult.push(showResult())
    }
    return arrResult;
};
var resultDepend

function resultWhenStart() {
    var resultCountDice = resultDice(3);
    resultDepend = resultCountDice
    closeResult()
    setTimeout(() => {
        for (let i = 0; i < resultCountDice.length; i++) {
            for (let j = 0; j < listObj.length; j++) {
                if (resultCountDice[i] === listObj[j].id) {
                    listObj[j].node.style.boxShadow = "0px 0px 20px blue"
                }
            }
        }

    }, 2000)
};

function closeResult() {
    setTimeout(() => {
        overlay.style.backgroundColor = "black"
    }, 1000)
}

function clearResult() {
    listObj.forEach((obj) => {
        obj.node.removeAttribute("style");
        announced.innerHTML = ""
    })
}


start.addEventListener("click", resultWhenStart);

function announcedResult() {
    overlay.removeAttribute("style")
    var listAnnounce = []
    if (resultDepend) {
        resultDepend.forEach((obj) => {
            for (let i = 0; i < listObj.length; i++) {
                if (obj === listObj[i].id) {
                    announced.innerHTML += `<h3>${listObj[i].name} </h3>`
                    listAnnounce.push(listObj[i].name)
                }
            }
        })
    }
    setTimeout(clearResult, 5000)
}
openbtn.addEventListener("click", announcedResult)

// let interval1;
// let interval2;
// let interval3;
// let dice = document.getElementsByClassName('dice')[0];
// let dice1 = dice.children[0];
// let dice2 = dice.children[1];
// let dice3 = dice.children[2];

// function onClickButton(el) {
//     console.log(el.innerText);
//     // debugger;
//     if (el.innerText == 'Start') {
//         el.setAttribute('class', 'btn btn-outline-danger');
//         btnStar();
//         el.innerText = 'Stop';
//     } else if (el.innerText == 'Stop') {
//         el.setAttribute('class', 'btn btn-outline-success');
//         btnStop();
//         el.innerText = 'Start';
//     }
// }

// function btnStar() {
//     randomDice();
// }

// function btnStop() {
//     clearInterval(interval1);
//     // clearInterval(interval2);
//     // clearInterval(interval3);
// }

// function randomDice() {
//     let term1, term2, term3;
//     interval1 = setInterval(() => {
//         term1 = Math.floor(Math.random() * 6 + 1);
//         changeDice(term2, dice1);
//         term2 = Math.floor(Math.random() * 6 + 1);
//         changeDice(term2, dice2);
//         term3 = Math.floor(Math.random() * 6 + 1);
//         changeDice(term3, dice3);
//     }, 100);
//     // interval2 = setInterval(()=>{
//     //     term2 = Math.floor(Math.random()*6+1);
//     //     changeDice(term2,dice2);
//     // }, 100);
//     // interval3 = setInterval(()=>{
//     //     term3 = Math.floor(Math.random()*6+1);
//     //     changeDice(term3,dice3);
//     // }, 100);
// }

// function changeDice(value, dice) {
//     switch (value) {
//         case 1:
//             dice.setAttribute('class', 'deer');
//             break;
//         case 2:
//             dice.setAttribute('class', 'calabash');
//             break;
//         case 3:
//             dice.setAttribute('class', 'chicken');
//             break;
//         case 4:
//             dice.setAttribute('class', 'fish');
//             break;
//         case 5:
//             dice.setAttribute('class', 'crab');
//             break;

//         default:
//             dice.setAttribute('class', 'shrimp');
//             // code block
//     }
// }
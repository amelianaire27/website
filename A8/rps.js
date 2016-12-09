/*

  Author: Amelia Rae White  
  Date: 11/25/2016


*/


function getImages(){
  var choiceList = [];

  choiceList.push(document.getElementById("1").id);
  choiceList.push(document.getElementById("2").id);
  choiceList.push(document.getElementById("3").id);
  return choiceList;
}



function playerChoice(){
  
  var selected = [];

  var allImg = document.getElementsByTagName("img");
  
  var choiceNum = getImages();

  for (j = 0; j < allImg.length; j++){
    if(allImg[j].className == "selectedImg"){
    selected.push(allImg[j].id);
    }
  }

  var pChoice = document.createElement("p");

  if(choiceNum[0] == selected[0]){
    pChoice.innerHTML = "You chose rock.";
  } else if(choiceNum[1] == selected[0]){
    pChoice.innerHTML = "You chose paper.";
  } else if(choiceNum[2] == selected[0]){
    pChoice.innerHTML = "You chose scissors.";
  }

  document.getElementById("choiceImg").appendChild(pChoice);
  return selected[0];

}

function computerChoice(){

  var computerNum = Math.floor(Math.random() * 3) + 1;
  var compImg = document.createElement("img");
  var compChoice = document.createElement("p");

    if(computerNum == 1){
      compImg.src = "rock.jpg";
      compChoice.innerHTML = "The computer chose rock.";
    } else if(computerNum == 2){
      compImg.src = "paper.jpg";
      compChoice.innerHTML = "The computer chose paper."
    } else if(computerNum == 3){
      compImg.src = "scissors.jpg";
      compChoice.innerHTML = "The computer chose scissors."
    }

  document.getElementById("computerImg").appendChild(compImg);
  document.getElementById("computerImg").innerHTML.src = compImg.src;
  document.getElementById("computerImg").appendChild(compChoice);

  return computerNum;

}


function roundWinner(round){


  var countCWin = 0;
  var countPWin = 0;
  var player = playerChoice();
  var computer = computerChoice();

  if (player == computer){
      window.alert("It's a tie!")
      countCWin++;
      countPWin++;
      round++;
    } else if (player == 1 && computer == 2 || player == 2 && computer == 3 || player == 3 && computer ==1){
      window.alert("The computer won :-(");
      countCWin++;
      round++;
    } else if (player == 2 && computer == 1 || player == 3 && computer == 2 || player == 1 && computer == 3){
      window.alert("You've won!");
      countPWin++;
      round++;
    }
  }

  if(countCWin > countPWin){
    window.alert("The computer won! Sorry, better luck next time.");
    location.reload();
  } else if (countPWin > countCWin){
    window.alert("Success! You're the winner!");
    location.reload();
  } else if (countCWin == countPWin){
    window.alert("Oh noes! It looks like you've tied!");
    location.reload();
  }

function highlight(image){
  image.style.border = "2px solid red";
  image.setAttribute("class", "selectedImg");
}

function removeClass(){
  document.getElementsByClassName("selectedImg").removeClass = "selectedImg";
}

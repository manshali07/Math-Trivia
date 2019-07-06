var playing = false;
var score;
var action;
var timeRem;
var ans;

//if we click on the Start/Reset button
document.getElementById("start").onclick = function(){
    hide("intro");
    //if we are playing
    if(playing == true){
        //reload the page
        location.reload();
    }
    //if we are not playing
    else{
        playing = true;
        //set score to 0
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;
        hide("gameOver");
        //show countdown box
        //document.getElementById("time").style.display = "block";
        show("time");
        //reduce time by 1sec in loops
        timeRem = 60;
        document.getElementById("value").innerHTML = timeRem;
        startCountDown();
        //change button to Reset
        document.getElementById("start").innerHTML = "Reset";
        //generate a new Ques and multiple Answer
        generateQnA();
        
    }
    
}

//if we click on answer box
for(i=1; i<5; i++){
    document.getElementById("ch"+i).onclick = function(){
    //if we are playing
    if(playing == true){
        //correct?
        if(this.innerHTML == ans){
            //yes->increase the score, show correct box for 1 sec, generate new Ques and Ans
            score+=5;
            document.getElementById("scoreValue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            generateQnA();
        }
        else{
            //no->show try again box for 1sec
            score-=2;
            document.getElementById("scoreValue").innerHTML = score;
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);
        }
        
    }
}
}

function startCountDown(){
    action = setInterval(function(){
        //yes->continue
        timeRem -= 1;
        document.getElementById("value").innerHTML = timeRem;
        //no->gameover
        if(timeRem == 0){
            stopCountDown();
            //document.getElementById("gameOver").style.display = "block";
            show("gameOver");
            if(score>=50){
                document.getElementById("gameOver").innerHTML = "<p>Game Over"+"<br>Your Score is "+ score + "<br><br><a href=divide.html>Next</a></p>";
            }
            else{
                document.getElementById("gameOver").innerHTML = "<p>Game Over</p>"+"<p>Your Score is "+ score + "</p>";
            }
            //document.getElementById("time").style.display = "none";
            hide("time");
            //document.getElementById("correct").style.display = "none";
            hide("correct");
            //document.getElementById("wrong").style.display = "none";
            hide("correct");
            playing = false;
            document.getElementById("start").innerHTML = "Start";
        }
    }, 1000)
}

//stop counter
function stopCountDown(){
    clearInterval(action);
}

//to show a certain element
function show(Id){
    document.getElementById(Id).style.display = "block";
}

//to hide a certain element
function hide(Id){
    document.getElementById(Id).style.display = "none";
}

function generateQnA(){
    var x = 1 + Math.round(19*Math.random());
    var y = 1 + Math.round(19*Math.random());
    ans = x*y;
    document.getElementById("ques").innerHTML = x + "x" + y;
    var correctPosition = 1 + Math.round(3*Math.random());
    document.getElementById("ch"+correctPosition).innerHTML = ans;
    //to store the answers so that none of the wrongAns are equal or not
    var answers = [ans];
    for(i=1; i<=4; i++){
        if(i != correctPosition){
            var wrongAns;
            //so that none of the wrongAns is equal to the actual ans or any other wrongAns
            do{
                wrongAns = (1 + Math.round(19*Math.random()))*(1 + Math.round(19*Math.random()));
            }while(answers.indexOf(wrongAns)>-1);
            document.getElementById("ch"+i).innerHTML = wrongAns;
            answers.push(wrongAns);//adding the wrongAns generated to the array
        }
    }
    
}


//GAME LOGIC
//if we click on the Start/Reset button
       //if we are playing
           //reload the page
       //if we are not playing
           //set score to 0
           //show countdown box
           //reduce time by 1sec in loops
                //time left?
                      //yes->continue
                      //no->gameover
          //change button to Reset
          //generate a new Ques and multiple Answer

//if we click on answer box
     //if we are playing
          //correct?
              //yes->increase the score, show correct box for 1 sec, generate new Ques and Ans
              //no->show try again box for 1sec
                     

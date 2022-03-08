let history = [];

function calculate() {

    var userInput = document.getElementById("result").value;

    var answer = eval(userInput);
    document.getElementById("result").value = answer;
    var res = userInput + " = " + String(answer);
    history.push(res);
    console.log(history);

}
function display(value) {
    document.getElementById("result").value += value;
}
function clearScreen() {
    document.getElementById("result").value = "";
}

function showHistory(){
    document.querySelector("#history-data").innerHTML = "";
    history.forEach((element) => {
          var li = document.createElement('li');
          li.innerHTML=element
              document.querySelector("#history-data").append(li);   
    });
    console.log(history);
}

function clearHistory() {
  
        history.length= 0;      
    document.querySelector("#history-data").innerHTML = "";
}    




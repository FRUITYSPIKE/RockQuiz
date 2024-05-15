//QUIZ;
// Variables

// i learnt this from W3 schools and gavin becauase i was actully really confusued for some reason on how to go about doing my java

let input1 = document.getElementById("ques1");
let input2 = document.getElementById("ques2");
let input3 = document.getElementById("ques3");
let input4 = document.getElementById("ques4");
let input5 = document.getElementById("ques5");
let input6 = document.getElementById("ques6");
let outputEl = document.getElementById("answers");
let responseEl = document.getElementById("textOutput");

// Correct/Incorrect variables

let true1 = document.getElementById("correct1");
let true2 = document.getElementById("correct2");
let true3 = document.getElementById("correct3");
let true4 = document.getElementById("correct4");
let true5 = document.getElementById("correct5");
let true6 = document.getElementById("correct6");

// Counting variable

let numCorrect = 0;

// event listener and function

document.getElementById("btnEl").addEventListener("click", mark);

function mark() {
  if (numCorrect < 6) {
    if (
      input1.value.toLowerCase() == "Toto" ||
      input1.value.toLowerCase() == "Sting"
    ) {
      numCorrect++;
      true1.innerHTML = "CORRECT";
      true1.style.color = "lightGreen";
      input1.style.border = "5px solid Green";
    } else {
      true1.innerHTML = "INCORRECT";
      true1.style.color = "red";
      input1.style.border = "4px solid red";
    }

    if (input2.value.toLowerCase() == " guns n roses") {
      numCorrect++;
      true2.innerHTML = "CORRECT";
      true2.style.color = "lightGreen";
      input2.style.border = "5px solid Green";
    } else {
      true2.innerHTML = "INCORRECT";
      true2.style.color = "red";
      input2.style.border = "4px solid red";
    }

    if (input3.value.toLowerCase() == "led zeppelin") {
      numCorrect++;
      true3.innerHTML = "CORRECT";
      true3.style.color = "lightGreen";
      input3.style.border = "5px solid Green";
    } else {
      true3.innerHTML = "INCORRECT";
      true3.style.color = "red";
      input3.style.border = "4px solid red";
    }

    if (input4.value.toLowerCase() == "Van halen") {
      numCorrect++;
      true4.innerHTML = "CORRECT";
      true4.style.color = "lightGreen";
      input4.style.border = "5px solid Green";
    } else {
      true4.innerHTML = "INCORRECT";
      true4.style.color = "red";
      input4.style.border = "4px solid red";
    }

    if (input5.value.toLowerCase() == "don't stop believin") {
      numCorrect++;
      true5.innerHTML = "CORRECT";
      true5.style.color = "lightGreen";
      input5.style.border = "5px solid Green";
    } else {
      true5.innerHTML = "INCORRECT";
      true5.style.color = "red";
      input5.style.border = "4px solid red";
    }

    if (input6.value.toLowerCase() == "Pink Floyd") {
      numCorrect++;
      true6.innerHTML = "CORRECT";
      true6.style.color = "lightGreen";
      input6.style.border = "5px solid Green";
    } else {
      true6.innerHTML = "INCORRECT";
      true6.style.color = "red";
      input6.style.border = "4px solid red";
    }
  } else {
    alert("Stop pressing the mark button");
  }

  // Output statement
  outputEl.innerHTML = `You got ${numCorrect}/6`;

  if (numCorrect <= 2) {
    responseEl.innerHTML = "tough luck";
    responseEl.style.color = "red";
  } else if (numCorrect <= 4) {
    responseEl.innerHTML = "Good job!";
    responseEl.style.color = "yellow";
  } else {
    responseEl.innerHTML = "great job!";
    responseEl.style.color = "lightGreen";
  }
}

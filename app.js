var form =document.getElementsByClassName("fromSection");
var quizBtn = document.getElementsByClassName("quizbtn");
var setUsername = document.getElementById("setUsername");
var setEmail = document.getElementById("setEmail");
// onsubmit
function onSubmit(){
    var userName = document.getElementById("userName");
    var userEmail = document.getElementById("userEmail");
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");

    if(userName.value !=""){
        if(!(userName.value.length < 3) ){
            nameError.innerHTML-""
            userName.style.borderBottom="2px solid green"
        }
        else{
            nameError.innerHTML="please enter your correct name.."
            userName.style.borderBottom="2px solid red"
        }

    }
    else{
        nameError.innerHTML="Please enter your name..."

    }
    var email_valid = /^[a-zA-Z0-9_.]{1,}[@]{1}[a-z]{1,}[.]{1}[a-z]{1,}$/
 
    if(userEmail.value !=""){
        if(userEmail.value.match(email_valid)){
            emailError.innerHTML = ""
            userEmail.style.borderBottom = "2px solid green"
        }
        else{
            emailError.innerHTML = "Please enter a correct Email.."
            userEmail.style.borderBottom = "2px solid red"
            
        }
    }
    
    else{
        emailError.innerHTML = "Please enter  Your Email.."

    }
    if(nameError.innerHTML == "" && emailError.innerHTML == "" ){
        form[0].classList.add("hide");
        quizBtn[0].classList.remove("hide")
        setUsername.innerText = `Name: ${userName.value}`
        setEmail.innerText = `Email: ${userEmail.value}`
    }
}
//quiz questions//
var questions = [
    {

        question: "What is easy to get into, but hard to get out of?",
        Option: {
            a: "diamond",
            b: "stone",
            c: "A towel.",
            d: "Trouble!"

        },
        answer: "Trouble!"
    },
    {
        
        question: "What gets wet while it’s drying?",
        Option: {
            a: "shirt ",
            b: "hair",
            c: "stone",
            d: "A towel.",

        },
        answer: "A towel."
    },
    {
        
        question: "What has hands but can’t clap?",
        Option: {
            a: "charger",
            b: "baby",
            c: "Toy",
            d: "A clock.",

        },
        answer: "A clock."
    }
    ,
    {
        
        question: "What can be as big as an elephant, but weighs nothing?",
        Option: {
            a: "A hole.",
            b: "ghost",
            c: "mirror",
            d: "Its shadow."
        },
        answer: "Its shadow."
    }
    ,
    {
        
        question: "How many prayers in a day:",
        Option: {
            a: "6",
            b: "5",
            c: "3",
            d: "none",

        },
        answer: "5"
    },
    {
        
        question: "What gets bigger and bigger the more you remove from it?",
        Option: {
            a: "ghost",
            b: "mirror",
            c: "A hole.",
            d: "none",
        },
        answer: "A hole."
    }
]
var wordingScore = document.getElementById("wordingScore");
var rightCount = document.getElementById("rightCount")
var  wrongCount= document.getElementById("wrongCount")
var resultMainBox = document.getElementById("resultMainBox")
// var resultMainBox = document.getElementsByClassName("resultBox")


// quizstart//
var startQuiz=document.getElementsByClassName("quiz");
var quizButton=document.getElementById("startBtn");
var quizQuestion =document.getElementById("quizQues");
var options = document.getElementsByClassName("option");
var questionNumber = document.getElementById("quesNum");
var score=0;
var nextButton =document.getElementById("nextQuestion");
var counter=0;
quizButton.onclick = function(){
    quizBtn[0].classList.add("hide");
    startQuiz[0].classList.remove("hide");
    questionChange(0)
    questionNumber.innerHTML=`${counter+1} / ${questions.length}`
    nextButton.style.display = "none"

    for(var i=0;i<options.length;i++){
        options[i].setAttribute("onclick","select(this)")
    }
}
// nextquestion
function nextques(){
    counter++;
    if(counter < questions.length){
        questionChange(counter);
        questionNumber.innerHTML=`${counter+1} / ${questions.length}`
        nextButton.style.display = "none"
    }
    else{
        startQuiz[0].classList.add("hide");
        location.href="score.html"
    }
}
function questionChange(count){
    quizQuestion.innerText=questions[count].question
    options[0].innerText=questions[count].Option.a
    options[1].innerText=questions[count].Option.b
    options[2].innerText=questions[count].Option.c
    options[3].innerText=questions[count].Option.d
    for(var i=0;i<options.length;i++){
        options[i].classList.remove("correct")
        options[i].classList.remove("wrong")
        options[i].classList.remove("disabled")
    }
}
// Selection
function select(ans){
    if(ans.innerHTML == questions[counter].answer){
        console.log("correct");
        ans.classList.add("correct");
        nextButton.style.display="block";
        score += 1;
        console.log(score)

    }
    else{
        console.log("wrong");
        ans.classList.add("wrong");
        nextButton.style.display = "block"

    }
    for(var b=0;b<4;b++){
        options[b].classList.add("disabled")

    }
    
}
function reset(){
    location.href="index.html"

}


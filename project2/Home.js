const quiz = [
    {
        question: "What is our youtube channel name ?", 
        answers: [
            { ans: "Hari", option: false },
            { ans: "Santhosh Hari", option: true },
            { ans: "Santhosh", option: false },
            { ans: "Santhosh hari I", option: false }
        ]
    },
    {
        question: "What is this course about?", 
        answers: [
            { ans: "Git and Git hub", option: true },
            { ans: "Java script", option: false },
            { ans: "Html and CSS", option: false },
            { ans: "Python", option: false }
        ]
    },
    {
        question: "Will you subscribe to our channel ?", 
        answers: [
            { ans: "Yes ! Defenitely", option: true },
            { ans: "May be", option: false },
            { ans: "No", option: false },
            { ans: "I am not sure", option: false }
        ]
    }
];

const questiondisplay = document.getElementById("question");
const answerbuttons = document.querySelectorAll(".ans-btn");
const nextbutton = document.querySelector(".next-btn");

let score=0;
let questionindex = 0;

function start() {
    quizcall(questionindex);
}

function quizcall(index) {
    if(index < quiz.length){
        nextbutton.style.display = "none";

        let questionnumber = index + 1;
        questiondisplay.innerHTML = questionnumber + ". " + quiz[index].question;

        answerbuttons.forEach((btn, i) => {
            btn.textContent = quiz[index].answers[i].ans;
            btn.dataset.correct = quiz[index].answers[i].option;
            btn.classList.remove("correct", "incorrect");
            btn.disabled = false;

            btn.removeEventListener("click", selectAnswer);
            btn.addEventListener("click", selectAnswer);
        });

        nextbutton.removeEventListener("click", nextround);
        nextbutton.addEventListener("click", nextround);
    }
    else{
        showresult();
    }
}


function selectAnswer(e) {
    const btnselect = e.target;
    const isCorrect = btnselect.dataset.correct === "true";

    if (isCorrect) {
        btnselect.classList.add("correct");
        score+=1;
        console.log(score);
        nextbutton.style.display = "block";
    } else {
        btnselect.classList.add("incorrect");
        nextbutton.style.display = "block";
    }
    answerbuttons.forEach(button => {
        button.disabled = true;
    });
}

function nextround(){
    questionindex++;
    quizcall(questionindex);
}

function showresult(){
    
}

start();

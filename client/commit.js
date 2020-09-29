const questionForm = document.querySelector('#form-question-data');
const questionEl = document.getElementById('field-question');
const correctEl = document.getElementById('field-answer-correct');
const addedByUserEl = document.getElementById('field-added-by-username');

const additionalElB = document.querySelector('#field-answer-incorrect-1');
const additionalElC = document.querySelector('#field-answer-incorrect-2');
const additionalElD = document.querySelector('#field-answer-incorrect-3');

//const API_URL = (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost")




function commitQuestion(){
    const added_by_user = addedByUserEl.value;
    const q_text = questionEl.value;
    const a_correct = correctEl.value;

    
    const a_b = additionalElB.value;
    const a_c = additionalElC.value;
    const a_d = additionalElD.value;
    
    const question = {
        added_by_user,
        q_text,
        a_correct,
        a_b,
        a_c,
        a_d
    };

    alert(JSON.stringify(question));
}
const questionForm = document.querySelector('#form-question-data');
const questionEl = document.getElementById('field-question');
const correctEl = document.getElementById('field-answer-correct');
const addedByUserEl = document.getElementById('field-added-by-username');

const additionalElB = document.querySelector('#field-answer-incorrect-1');
const additionalElC = document.querySelector('#field-answer-incorrect-2');
const additionalElD = document.querySelector('#field-answer-incorrect-3');

const API_URL = 'http://185.65.202.37:3000'




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

    const response = fetch(`${API_URL}/questions`, {
        method: 'POST', // или 'PUT'
        body: JSON.stringify(question), // данные могут быть 'строкой' или {объектом}!
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const responseJson = response.json();
      console.log('Успех:', JSON.stringify(responseJson));
}
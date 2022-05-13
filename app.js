fetch(
  "https://raw.githubusercontent.com/stexity/react-assessment/master/src/questions.json"
)
  .then((apiData) => {
    // console.log(apiData)
    return apiData.json();
  })
  .then((actualdata) => {
    console.log(actualdata);

    // var data = JSON.stringify(actualdata);

    // data.replace(/[^\x00-\x7F]/g, "");
    // console.log(data);

    // console.log(data);

    const loadQuestion = () => {
      // console.log(question)
      // console.log(opt1)
      var Q1 = actualdata[0].question;
      var DQ = decodeURIComponent(Q1);
      console.log(DQ);
      question[0].innerText = DQ;
      opt1.innerHTML = actualdata[0].incorrect_answers[0];
      var option2 = actualdata[0].incorrect_answers[1];
      var decodeoption2 = decodeURIComponent(option2);
      opt2.innerHTML = decodeoption2;

      var option3 = actualdata[0].incorrect_answers[2];
      var decodeoption3 = decodeURIComponent(option3);
      opt3.innerHTML = decodeoption3;
      // opt3.innerHTML = decodeoption3;
      var option4 = actualdata[0].correct_answer;
      var decodeoption4 = decodeURIComponent(option4);
      opt4.innerHTML = decodeoption4;

      var entertainment1 = actualdata[0].category;
      var entertHeading = decodeURIComponent(entertainment1);
      entertainment.innerHTML = entertHeading;
    };

    loadQuestion();
const getAnswer =()=>
{
  let answer;
  answer.forEach((element) => {
    if (element.checked)
    {
      answer =element.id; 
    }

    
  });
  return element;
}


    submit.addEventListener('click',()=>
    {
      const checkedanswer=getAnswer();
      console.log(checkedanswer)
    });

  })
  .catch((err) => {
    console.log(err);
  });

var question = document.getElementsByClassName("question");

console.log(question[0]);

var opt1 = document.getElementById("opt1");
console.log(opt1);
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var entertainment = document.getElementById("entertainment");
// console.log(entertainment)
console.log(opt4);
//  var nextbtn = document.querySelector('#nextbtn')

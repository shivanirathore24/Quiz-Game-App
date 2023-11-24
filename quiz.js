const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "Three",
  options: ["Two", "Three", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

/** Manipulating DOM ***/

//destructing properties from Object
const { correctAnswer, options, question } = questionObj;

let score = 0;

//accessing all the elements
const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");

//setting question the text-content
questionEl.textContent = question;

const suffledOptions = suffleOptions(options);

/*** Populating the options div with the buttons ***/
suffledOptions.forEach((opt) => {
  //creating button & appending it to the option div
  const btn = document.createElement("button");
  btn.textContent = opt;
  optionEl.appendChild(btn);

  //event handling on the button
  btn.addEventListener("click", () => {
    if (opt === correctAnswer) {
      score++;
    } else {
      score = score - 0.25;
    }
    //console.log(score);
    scoreEl.textContent = `Score: ${score}`;

    //after attempting quetion, options shouldn't show and display Quiz Completed
    questionEl.textContent = "Quiz Completed !!";
    optionEl.textContent = "";
  });
});

/*** Suffle Options ***/
function suffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [options[i], options[j]] = [options[j], options[i]];
  }
  console.log(options);
  return options;
}

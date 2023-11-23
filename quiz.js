const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "Three",
  answers: ["Two", "Three ", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

//destructing properties from Object
const { correctAnswer, options, question } = questionObj;

//accessing all the elements
const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");

//setting question the text-content
questionEl.textContent = question;

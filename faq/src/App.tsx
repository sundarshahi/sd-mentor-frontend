import "./App.css";
import FaqAccordion from "./components/faq";

function App() {
  const data = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend mentor offers realistic coding challenges to help developers improve their frotend coding skilld with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer: "Yes, Frontend Mentor is free to use.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer: "Yes, you can use Frontend Mentor projects in your portfolio.",
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer: "You can ask questions in the Readme file in the project folder.",
    },
  ];
  return (
    <>
      <FaqAccordion data={data} />
    </>
  );
}

export default App;

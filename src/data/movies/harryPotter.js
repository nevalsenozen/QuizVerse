import harryPotterImg from "../../assets/img/harrypotter.jpg";



const harryPotterQuiz = {
  id: 3,
  title: "Harry Potter Quiz",
  category: "Film",
  description: "Hogwarts bilgini test ediyoruz!",
  difficulty: "Orta",
  timePerQuestion: 15,
  image: harryPotterImg,
  theme: {
  primary: "#6B4A35",
  secondary: "#C8A27A",
  background:
    "radial-gradient(circle at top left, #E8D6C3, transparent 36%), radial-gradient(circle at bottom right, #C8A27A, transparent 34%), #FFF8F0",
},
  questions: [
    {
      question: "Harry'nin alnındaki yara izi ne şeklindedir?",
      options: ["Yıldız", "Şimşek", "Ay", "Kalp"],
      answer: "Şimşek",
    },
    {
      question: "Harry'nin en yakın arkadaşları kimlerdir?",
      options: ["Ron ve Hermione", "Draco ve Luna", "Neville ve Ginny", "Fred ve George"],
      answer: "Ron ve Hermione",
    },
    {
      question: "Hogwarts'ın müdürü kimdir?",
      options: ["Dumbledore", "Snape", "Hagrid", "Sirius"],
      answer: "Dumbledore",
    },
    {
      question: "Harry hangi binadadır?",
      options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
      answer: "Gryffindor",
    },
    {
      question: "Voldemort'un gerçek adı nedir?",
      options: ["Tom Riddle", "Lucius Malfoy", "Severus Snape", "Peter Pettigrew"],
      answer: "Tom Riddle",
    },
    {
      question: "Harry'nin baykuşunun adı nedir?",
      options: ["Hedwig", "Crookshanks", "Fawkes", "Errol"],
      answer: "Hedwig",
    },
    {
      question: "Sihirli sporun adı nedir?",
      options: ["Quidditch", "Wizardball", "Magic Run", "Snitch Game"],
      answer: "Quidditch",
    },
    {
      question: "Hermione'nin kedisinin adı nedir?",
      options: ["Crookshanks", "Hedwig", "Fang", "Scabbers"],
      answer: "Crookshanks",
    },
    {
      question: "Ron'un faresinin adı nedir?",
      options: ["Scabbers", "Fang", "Dobby", "Aragog"],
      answer: "Scabbers",
    },
    {
      question: "Dobby ne tür bir varlıktır?",
      options: ["Ev cini", "Goblin", "Dev", "Anka kuşu"],
      answer: "Ev cini",
    },
  ],
};

export default harryPotterQuiz;
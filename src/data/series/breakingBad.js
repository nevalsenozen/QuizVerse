const breakingBadQuiz = {
  id: 2,
  title: "Breaking Bad Quiz",
  category: "Dizi",
  description: "Heisenberg evrenine ne kadar hakimsin?",
  difficulty: "Orta",
  timePerQuestion: 15,
  image: "src/assets/img/breakingbad.jpg",
  theme: {
  primary: "#2E7D32",
  secondary: "#A5D6A7",
  background:
    "radial-gradient(circle at top left, #DFF3E3, transparent 36%), radial-gradient(circle at bottom right, #A5D6A7, transparent 34%), #F4FFF5",
},
  questions: [
    {
      question: "Walter White'ın lakabı nedir?",
      options: ["Heisenberg", "Jesse", "Saul", "Mike"],
      answer: "Heisenberg",
    },
    {
      question: "Walter White'ın asıl mesleği nedir?",
      options: ["Kimya öğretmeni", "Doktor", "Avukat", "Polis"],
      answer: "Kimya öğretmeni",
    },
    {
      question: "Jesse Pinkman Walter'a genellikle ne der?",
      options: ["Mr. White", "Boss", "Teacher", "Heisenberg"],
      answer: "Mr. White",
    },
    {
      question: "Saul Goodman'ın mesleği nedir?",
      options: ["Avukat", "Doktor", "Polis", "Aşçı"],
      answer: "Avukat",
    },
    {
      question: "Walter'ın eşinin adı nedir?",
      options: ["Skyler", "Marie", "Jane", "Lydia"],
      answer: "Skyler",
    },
    {
      question: "Jesse'nin meşhur sözü hangisidir?",
      options: ["Yeah, science!", "Pivot!", "Winter is coming", "Bazinga"],
      answer: "Yeah, science!",
    },
    {
      question: "Gus Fring hangi restoran zincirinin sahibidir?",
      options: ["Los Pollos Hermanos", "Central Perk", "Good Burger", "Pizza Planet"],
      answer: "Los Pollos Hermanos",
    },
    {
      question: "Hank'in mesleği nedir?",
      options: ["DEA ajanı", "Doktor", "Öğretmen", "Şef"],
      answer: "DEA ajanı",
    },
    {
      question: "Walter'ın oğlunun adı nedir?",
      options: ["Walter Jr.", "Jesse Jr.", "Tommy", "Mike Jr."],
      answer: "Walter Jr.",
    },
    {
      question: "Dizi hangi şehirde geçer?",
      options: ["Albuquerque", "New York", "Chicago", "Los Angeles"],
      answer: "Albuquerque",
    },
  ],
};

export default breakingBadQuiz;
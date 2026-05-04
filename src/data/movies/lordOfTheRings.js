const lordOfTheRingsQuiz = {
  id: 5,
  title: "Yüzüklerin Efendisi Quiz",
  category: "Film",
  description: "Orta Dünya bilgini test ediyoruz!",
  difficulty: "Orta",
  timePerQuestion: 15,
  image:
    "https://upload.wikimedia.org/wikipedia/en/8/87/Ringstrilogyposter.jpg",
  theme: {
    primary: "#4B3A2A",
    secondary: "#B08D57",
    background:
      "radial-gradient(circle at top left, #D8C3A5, transparent 36%), radial-gradient(circle at bottom right, #8A6F4D, transparent 34%), #FFF8EE",
  },
  questions: [
    {
      question: "Yüzüklerin Efendisi'nde yüzüğü taşıyan hobbit kimdir?",
      options: ["Frodo", "Sam", "Merry", "Pippin"],
      answer: "Frodo",
    },
    {
      question: "Frodo'nun en yakın yol arkadaşı kimdir?",
      options: ["Sam", "Gandalf", "Aragorn", "Legolas"],
      answer: "Sam",
    },
    {
      question: "Tek Yüzük nerede yok edilmelidir?",
      options: ["Hüküm Dağı", "Minas Tirith", "Ayrıkvadi", "Moria"],
      answer: "Hüküm Dağı",
    },
    {
      question: "Gandalf'ın bilinen rengi hangisidir?",
      options: ["Gri", "Mavi", "Kırmızı", "Yeşil"],
      answer: "Gri",
    },
    {
      question: "Aragorn'un kullandığı yenilenmiş kılıcın adı nedir?",
      options: ["Andúril", "Sting", "Glamdring", "Narsil"],
      answer: "Andúril",
    },
    {
      question: "Legolas hangi ırktandır?",
      options: ["Elf", "Cüce", "İnsan", "Hobbit"],
      answer: "Elf",
    },
    {
      question: "Gimli hangi ırktandır?",
      options: ["Cüce", "Elf", "İnsan", "Ork"],
      answer: "Cüce",
    },
    {
      question: "Sauron'un simgesi genellikle nasıl gösterilir?",
      options: ["Ateşli göz", "Beyaz ağaç", "Altın taç", "Kara kılıç"],
      answer: "Ateşli göz",
    },
    {
      question: "Yüzük Kardeşliği kaç kişiden oluşur?",
      options: ["9", "7", "8", "10"],
      answer: "9",
    },
    {
      question: "Gollum yüzüğe ne der?",
      options: ["Kıymetlim", "Efendim", "Hazinem", "Gücüm"],
      answer: "Kıymetlim",
    },
  ],
};

export default lordOfTheRingsQuiz;
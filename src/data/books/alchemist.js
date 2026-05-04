import alchemistImg from "../../assets/img/alchemist.jpg";


const alchemistQuiz = {
  id: 7,
  title: "Simyacı Quiz",
  category: "Kitap",
  description: "Santiago'nun yolculuğunu ne kadar biliyorsun?",
  difficulty: "Orta",
  timePerQuestion: 15,
  image: alchemistImg,
  theme: {
    primary: "#C9A227",
    secondary: "#F5DEB3",
    background:
      "radial-gradient(circle at top left, #FFF3C4, transparent 36%), radial-gradient(circle at bottom right, #E8C872, transparent 34%), #FFFBEA",
  },
  questions: [
    {
      question: "Simyacı romanının baş karakteri kimdir?",
      options: ["Santiago", "Ali", "Marco", "Salim"],
      answer: "Santiago",
    },
    {
      question: "Santiago'nun mesleği nedir?",
      options: ["Çoban", "Tüccar", "Asker", "Yazar"],
      answer: "Çoban",
    },
    {
      question: "Santiago rüyasında ne görür?",
      options: [
        "Hazine",
        "Bir şehir",
        "Bir savaş",
        "Bir krallık",
      ],
      answer: "Hazine",
    },
    {
      question: "Santiago'nun yolculuğu hangi ülkeye doğrudur?",
      options: ["Mısır", "İtalya", "Fransa", "Yunanistan"],
      answer: "Mısır",
    },
    {
      question: "Santiago çölde kimi tanır?",
      options: ["Simyacı", "Kral", "Asker", "Tüccar"],
      answer: "Simyacı",
    },
    {
      question: "Simyacı Santiago'ya ne öğretir?",
      options: [
        "Kalbini dinlemeyi",
        "Savaşmayı",
        "Zengin olmayı",
        "Kaçmayı",
      ],
      answer: "Kalbini dinlemeyi",
    },
    {
      question: "Santiago'nun aşık olduğu kişinin adı nedir?",
      options: ["Fatima", "Leyla", "Maria", "Elif"],
      answer: "Fatima",
    },
    {
      question: "Santiago'nun aradığı hazine aslında nerededir?",
      options: [
        "Başladığı yerde",
        "Mısır'da",
        "Çölde",
        "Bir şehirde",
      ],
      answer: "Başladığı yerde",
    },
    {
      question: "Romanda sık geçen önemli kavram nedir?",
      options: [
        "Kişisel menkıbe",
        "Zenginlik",
        "Savaş",
        "Güç",
      ],
      answer: "Kişisel menkıbe",
    },
    {
      question: "Simyacı kitabının ana mesajı nedir?",
      options: [
        "Hayallerinin peşinden git",
        "Zengin ol",
        "Güçlü ol",
        "Kaç",
      ],
      answer: "Hayallerinin peşinden git",
    },
  ],
};

export default alchemistQuiz;
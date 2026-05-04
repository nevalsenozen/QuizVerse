const littlePrinceQuiz = {
  id: 4,
  title: "Küçük Prens Quiz",
  category: "Kitap",
  description: "Küçük Prens’i gerçekten okudun mu?",
  difficulty: "Kolay",
  timePerQuestion: 15,
  image: "src/assets/img/kucukprens.jpg",
  theme: {
  primary: "#4A90C2",
  secondary: "#BFE6FF",
  background:
    "radial-gradient(circle at top left, #DDF3FF, transparent 36%), radial-gradient(circle at bottom right, #BFE6FF, transparent 34%), #F6FCFF",
},
  questions: [
    {
      question: "Küçük Prens hangi gezegenden gelir?",
      options: ["B-612", "Mars", "Venüs", "Dünya"],
      answer: "B-612",
    },
    {
      question: "Küçük Prens'in çok sevdiği çiçek nedir?",
      options: ["Gül", "Lale", "Papatya", "Orkide"],
      answer: "Gül",
    },
    {
      question: "Kitapta tilki neyi anlatır?",
      options: ["Evcilleştirmeyi", "Savaşmayı", "Uçmayı", "Kaçmayı"],
      answer: "Evcilleştirmeyi",
    },
    {
      question: "Küçük Prens çölde kiminle karşılaşır?",
      options: ["Pilot", "Kral", "Tüccar", "Coğrafyacı"],
      answer: "Pilot",
    },
    {
      question: "Kitabın yazarı kimdir?",
      options: ["Antoine de Saint-Exupéry", "Victor Hugo", "Albert Camus", "Jules Verne"],
      answer: "Antoine de Saint-Exupéry",
    },
    {
      question: "Küçük Prens gezegeninde ne temizler?",
      options: ["Baobab filizlerini", "Denizleri", "Yolları", "Bulutları"],
      answer: "Baobab filizlerini",
    },
    {
      question: "Tilkinin meşhur sözü neyle ilgilidir?",
      options: ["Kalp ile görmek", "Para kazanmak", "Güçlü olmak", "Sessiz kalmak"],
      answer: "Kalp ile görmek",
    },
    {
      question: "Küçük Prens hangi hayvanla önemli bir sahne yaşar?",
      options: ["Yılan", "Aslan", "Kedi", "Kuş"],
      answer: "Yılan",
    },
    {
      question: "Küçük Prens hangi duyguyu sıkça temsil eder?",
      options: ["Merak", "Öfke", "Kıskançlık", "Hırs"],
      answer: "Merak",
    },
    {
      question: "Kitap genel olarak neyi sorgular?",
      options: ["Yetişkinlerin dünyasını", "Sporu", "Teknolojiyi", "Savaşı"],
      answer: "Yetişkinlerin dünyasını",
    },
  ],
};

export default littlePrinceQuiz;
import friendsImg from "../../assets/img/friends.jpg";
import rossqu from "../../assets/questionImg/rossqu.gif"
import joeyqu from "../../assets/questionImg/joeyqu.gif"
import monicaqu from "../../assets/questionImg/monicaqu.gif"
import rachelqu from "../../assets/questionImg/rachelqu.gif"
import phobequ from "../../assets/questionImg/phobequ.gif"
import chandlerqu from "../../assets/questionImg/chandlerqu.gif"
//import rossmarried from "../../assets/questionImg/rossmarried.png"
import joeyhow from "../../assets/questionImg/joeyhow.gif"

const friendsQuiz = {
  id: 1,
  title: "Friends Quiz",
  category: "Dizi",
  description: "Gerçek bir Friends izleyicisi misin?",
  difficulty: "Kolay",
  timePerQuestion: 15,
  image: friendsImg,
  theme: {
  primary: "#9B7EDE",
  secondary: "#F3A6C8",
  background:
    "radial-gradient(circle at top left, #EADCFB, transparent 36%), radial-gradient(circle at bottom right, #FFDCEB, transparent 34%), #FFF7FC",
},
  questions: [
    {
      question: "Ross'un mesleği nedir?",
      options: ["Doktor", "Paleontolog", "Avukat", "Aşçı"],
      answer: "Paleontolog",
      image: rossqu,
    },
    {
      question: "Joey'nin en sevdiği yemek nedir?",
      options: ["Pizza", "Sandviç", "Salata", "Sushi"],
      answer: "Sandviç",
      image: joeyqu,
    },
    {
      question: "Monica'nın mesleği nedir?",
      options: ["Aşçı", "Öğretmen", "Oyuncu", "Gazeteci"],
      answer: "Aşçı",
      image: monicaqu,
    },
    {
      question: "Rachel ilk sezonlarda nerede çalışır?",
      options: ["Central Perk", "Hastane", "Okul", "Restoran"],
      answer: "Central Perk",
      image: rachelqu,
    },
    {
      question: "Phoebe'nin meşhur şarkısı hangisidir?",
      options: ["Smelly Cat", "Yellow Cat", "Crazy Dog", "Little Bird"],
      answer: "Smelly Cat",
      image: phobequ,
    },
    {
      question: "Chandler'ın soyadı nedir?",
      options: ["Bing", "Green", "Geller", "Tribbiani"],
      answer: "Bing",
      image: chandlerqu,
    },
    {
      question: "Ross kaç kere evlenmiştir?",
      options: ["1", "2", "3", "4"],
      answer: "3",
      //image: rossmarried,
    },
    {
      question: "Joey'nin meşhur repliği nedir?",
      options: ["How you doin'?", "Oh my God!", "Pivot!", "We were on a break!"],
      answer: "How you doin'?",
      image: joeyhow,
    },
    {
      question: "Monica'nın kardeşi kimdir?",
      options: ["Ross", "Joey", "Chandler", "Mike"],
      answer: "Ross",
    },
    {
      question: "Dizide arkadaşların sık gittiği kafenin adı nedir?",
      options: ["Central Perk", "Coffee House", "Friends Cafe", "New York Coffee"],
      answer: "Central Perk",
    },
  ],
};

export default friendsQuiz;
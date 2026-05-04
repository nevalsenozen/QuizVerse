import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import quizzes from "./data/quizzes";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [searchText, setSearchText] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [bestScores, setBestScores] = useState({});
  const [leaderboard, setLeaderboard] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15);
  const [showConfetti, setShowConfetti] = useState(false);

  const categories = ["Tümü", "Dizi", "Film", "Kitap"];

  const categoryThemes = {
    Tümü: {
      primary: "#9B7EDE",
      secondary: "#F3A6C8",
      background:
        "radial-gradient(circle at top left, #EADCFB, transparent 36%), radial-gradient(circle at top right, #FFDCEB, transparent 34%), radial-gradient(circle at bottom left, #F7EAFE, transparent 36%), #FFF7FC",
    },
    Dizi: {
      primary: "#6BAED6",
      secondary: "#BFE6FF",
      background:
        "radial-gradient(circle at top left, #DDF3FF, transparent 36%), radial-gradient(circle at bottom right, #BFE6FF, transparent 34%), #F6FCFF",
    },
    Film: {
      primary: "#6FA878",
      secondary: "#BFE3C3",
      background:
        "radial-gradient(circle at top left, #DFF3E3, transparent 36%), radial-gradient(circle at bottom right, #BFE3C3, transparent 34%), #F7FFF8",
    },
    Kitap: {
      primary: "#2E2E35",
      secondary: "#8A8792",
      background:
        "radial-gradient(circle at top left, #D8D6DD, transparent 36%), radial-gradient(circle at bottom right, #A7A3AF, transparent 34%), #F4F3F6",
    },
  };

  const activeTheme = selectedQuiz?.theme || categoryThemes[selectedCategory];
  const activeQuestion = shuffledQuestions[currentQuestion];

  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem("quizBestScores")) || {};
    const savedName = localStorage.getItem("quizUserName") || "";
    const savedLeaderboard =
      JSON.parse(localStorage.getItem("quizLeaderboard")) || [];

    setBestScores(savedScores);
    setUserName(savedName);
    setLeaderboard(savedLeaderboard);
  }, []);

  useEffect(() => {
    if (!selectedQuiz || isFinished) return;

    if (timeLeft === 0) {
      handleTimeUp();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, selectedQuiz, isFinished]);

  const filteredQuizzes = quizzes.filter((quiz) => {
    const categoryMatch =
      selectedCategory === "Tümü" || quiz.category === selectedCategory;

    const searchMatch = quiz.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return categoryMatch && searchMatch;
  });

  function getCategoryCount(category) {
    if (category === "Tümü") return quizzes.length;
    return quizzes.filter((quiz) => quiz.category === category).length;
  }

  function handleNameChange(e) {
    setUserName(e.target.value);
    localStorage.setItem("quizUserName", e.target.value);
  }

  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  function startQuiz(quiz) {
    const questionsWithShuffledOptions = quiz.questions.map((question) => ({
      ...question,
      options: shuffleArray(question.options),
    }));

    setSelectedQuiz(quiz);
    setShuffledQuestions(questionsWithShuffledOptions);
    setCurrentQuestion(0);
    setScore(0);
    setAnswers({});
    setWrongAnswers([]);
    setIsFinished(false);
    setShowConfetti(false);
    setTimeLeft(quiz.timePerQuestion || 15);
  }

  function goNextQuestion() {
    if (currentQuestion + 1 < shuffledQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(selectedQuiz.timePerQuestion || 15);
    } else {
      finishQuiz(score);
    }
  }

    function handleAnswer(option) {
  const questionNow = shuffledQuestions[currentQuestion];
  const isCorrect = option === questionNow.answer;

  const alreadyAnswered = answers[currentQuestion];

  const newAnswers = {
    ...answers,
    [currentQuestion]: option,
  };

  setAnswers(newAnswers);

  let newScore = score;

  if (!alreadyAnswered && isCorrect) {
    newScore = score + 1;
    setScore(newScore);
  }

  if (currentQuestion + 1 < shuffledQuestions.length) {
    setCurrentQuestion(currentQuestion + 1);
    setTimeLeft(selectedQuiz.timePerQuestion || 15);
  } else {
    finishQuiz(newScore);
  }
}
  

  function handleTimeUp() {
    const questionNow = shuffledQuestions[currentQuestion];

    setWrongAnswers((prevWrongAnswers) => [
      ...prevWrongAnswers,
      {
        question: questionNow.question,
        yourAnswer: "Süre doldu",
        correctAnswer: questionNow.answer,
      },
    ]);

    if (currentQuestion + 1 < shuffledQuestions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(selectedQuiz.timePerQuestion || 15);
    } else {
      finishQuiz(score);
    }
  }

  function saveLeaderboard(finalScore) {
    const playerName = userName.trim() || "İsimsiz Kullanıcı";

    const newRecord = {
      id: Date.now(),
      name: playerName,
      quizTitle: selectedQuiz.title,
      score: finalScore,
      total: selectedQuiz.questions.length,
      date: new Date().toLocaleDateString("tr-TR"),
    };

    const savedLeaderboard =
      JSON.parse(localStorage.getItem("quizLeaderboard")) || [];

    const updatedLeaderboard = [newRecord, ...savedLeaderboard]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    localStorage.setItem("quizLeaderboard", JSON.stringify(updatedLeaderboard));
    setLeaderboard(updatedLeaderboard);
  }

  function finishQuiz(finalScore) {
    setIsFinished(true);
    saveLeaderboard(finalScore);

    if (finalScore >= 9) {
      setShowConfetti(true);

      setTimeout(() => {
        setShowConfetti(false);
      }, 4000);
    }

    const savedScores = JSON.parse(localStorage.getItem("quizBestScores")) || {};
    const oldBestScore = savedScores[selectedQuiz.id] || 0;

    if (finalScore > oldBestScore) {
      const updatedScores = {
        ...savedScores,
        [selectedQuiz.id]: finalScore,
      };

      localStorage.setItem("quizBestScores", JSON.stringify(updatedScores));
      setBestScores(updatedScores);
    }
  }

  function clearLeaderboard() {
    localStorage.removeItem("quizLeaderboard");
    setLeaderboard([]);
  }

  function goHome() {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setScore(0);
    setAnswers({});
    setIsFinished(false);
    setWrongAnswers([]);
    setShuffledQuestions([]);
    setShowConfetti(false);
    setTimeLeft(15);
  }

  function restartQuiz() {
    startQuiz(selectedQuiz);
  }

  function goPreviousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setTimeLeft(selectedQuiz.timePerQuestion || 15);
    }
  }

  function shareResult() {
    const nameText = userName ? `${userName} olarak ` : "";
    const text = `QuizVerse'te ${nameText}${selectedQuiz.title} sonucum: ${score}/${shuffledQuestions.length}!`;

    navigator.clipboard.writeText(text);
    alert("Sonuç panoya kopyalandı!");
  }

  function getResultMessage() {
    const name = userName ? `${userName}, ` : "";

    if (score <= 3) return `${name}sen bunu sadece reelslerden görmüşsün 😅`;
    if (score <= 6)
      return `${name}sen yarım yamalak bir ${selectedQuiz.title} izleyicisisin 😄`;
    if (score <= 8) return `${name}sen baya iyi takip etmişsin 🔥`;
    return `${name}sen bunun fanısın, kabul edelim 🏆`;
  }

  return (
    <div
      className="app"
      style={{
        "--primary": activeTheme.primary,
        "--secondary": activeTheme.secondary,
        "--page-bg": activeTheme.background,
      }}
    >
      {showConfetti && <Confetti numberOfPieces={300} gravity={0.3} />}

      {!selectedQuiz && (
        <>
          <section className="hero">
            <h1 className="main-title">QuizVerse</h1>
            <p className="subtitle">Dizi, film ve kitap bilgini test et!</p>
            <p className="hero-text">
              Sevdiğin evreni seç, 10 soruyu çöz, gerçek fan mısın görelim.
            </p>

            <div className="name-area">
              <label>Adın ne?</label>
              <input
                type="text"
                placeholder="Örn: Neval"
                value={userName}
                onChange={handleNameChange}
              />
            </div>
          </section>

          {leaderboard.length > 0 && (
            <section className="leaderboard">
              <div className="leaderboard-header">
                <h2>🏆 Leaderboard</h2>
                <button onClick={clearLeaderboard}>Temizle</button>
              </div>

              <div className="leaderboard-list">
                {leaderboard.map((item, index) => (
                  <div className="leaderboard-row" key={item.id}>
                    <strong>{index + 1}.</strong>
                    <span>{item.name}</span>
                    <span>{item.quizTitle}</span>
                    <b>
                      {item.score}/{item.total}
                    </b>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="categories">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "active" : ""}
              >
                {category} ({getCategoryCount(category)})
              </button>
            ))}
          </div>

          <div className="search-area">
            <input
              type="text"
              placeholder="Quiz ara... Örn: Friends"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          <div className="quiz-list">
            {filteredQuizzes.map((quiz) => (
              <div
                className="quiz-card"
                key={quiz.id}
                style={{
                  "--card-color": quiz.theme.primary,
                  "--card-soft": quiz.theme.secondary,
                }}
              >
                <img src={quiz.image} alt={quiz.title} />

                <div className="quiz-card-content">
                  <span>{quiz.category}</span>
                  <h3>{quiz.title}</h3>
                  <p>{quiz.description}</p>

                  <div className="quiz-info">
                    <small>Zorluk: {quiz.difficulty}</small>
                    <small>Süre: {quiz.timePerQuestion || 15} sn / soru</small>
                    <small>
                      En iyi skor: {bestScores[quiz.id] || 0}/
                      {quiz.questions.length}
                    </small>
                  </div>

                  <button onClick={() => startQuiz(quiz)}>Teste Başla</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedQuiz && !isFinished && activeQuestion && (
        <>
          <button className="home-back-btn" onClick={goHome}>
            ← Ana Sayfa
          </button>

          <div className="question-page">
            <div className="question-image">
              <img
                src={activeQuestion.image || selectedQuiz.image}
                alt={activeQuestion.question}
              />
            </div>

            <div className="question-box">
              <button
                className="back-btn"
                onClick={goPreviousQuestion}
                disabled={currentQuestion === 0}
              >
                ← Önceki Soru
              </button>

              <h2>{selectedQuiz.title}</h2>

              {userName && (
                <p className="hello-user">Bol şans, {userName}! ✨</p>
              )}

              <div className="timer-box">
                <span>Kalan süre</span>
                <strong>{timeLeft}</strong>
              </div>

              <p className="question-count">
                Soru {currentQuestion + 1} / {shuffledQuestions.length}
              </p>

              <div className="step-progress">
                {shuffledQuestions.map((_, index) => (
                  <div
                    key={index}
                    className={index <= currentQuestion ? "step active" : "step"}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              <div className="progress">
                <div
                  style={{
                    width: `${
                      ((currentQuestion + 1) / shuffledQuestions.length) * 100
                    }%`,
                  }}
                ></div>
              </div>

              <h3>{activeQuestion.question}</h3>

              <div className="options">
                {activeQuestion.options.map((option) => (
                  <button key={option} onClick={() => handleAnswer(option)}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {selectedQuiz && isFinished && (
        <div className="result-box">
          <h2>Sonuç</h2>

          <div className="score-circle">
            {score}/{shuffledQuestions.length}
          </div>

          <p className="result-message">{getResultMessage()}</p>

          <p className="best-score">
            En iyi skorun: {bestScores[selectedQuiz.id] || score}/
            {shuffledQuestions.length}
          </p>

          {wrongAnswers.length > 0 && (
            <div className="wrong-list">
              <h3>Yanlış yaptığın sorular</h3>

              {wrongAnswers.map((item, index) => (
                <div className="wrong-card" key={index}>
                  <h4>{item.question}</h4>
                  <p>
                    Senin cevabın: <strong>{item.yourAnswer}</strong>
                  </p>
                  <p>
                    Doğru cevap: <strong>{item.correctAnswer}</strong>
                  </p>
                </div>
              ))}
            </div>
          )}

          {wrongAnswers.length === 0 && (
            <p className="perfect">Hiç yanlışın yok! Efsanesin 🏆</p>
          )}

          <div className="result-buttons">
            <button onClick={restartQuiz}>Tekrar Çöz</button>
            <button onClick={shareResult}>Sonucu Paylaş</button>
            <button onClick={goHome}>Ana Menüye Dön</button>
          </div>
        </div>
      )}

      <div className="floating-wrapper">
        <span className="floating-text">Quiz öner</span>

        <a
          href="mailto:neevall13@gmail.com?subject=QuizVerse%20Öneri&body=Merhaba,%20şu%20quiz%20eklenebilir:%20"
          className="floating-btn"
        >
          💬
        </a>
      </div>
    </div>
  );
}

export default App;
import React, { useState } from "react";

const questions = [
  { id: 1, text: "Have you eaten fewer than 50g of carbs today?" },
  {
    id: 2,
    text: "Do you have noticeable breath changes (metallic/fruity smell)?",
  },
  { id: 3, text: "Have you experienced a recent drop in appetite?" },
  { id: 4, text: "Are you feeling more mental clarity than usual?" },
  { id: 5, text: "Have you recently noticed increased urination or thirst?" },
];

export const KetosisQuiz: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, "yes" | "no" | null>>(
    () => {
      const initialState: Record<number, "yes" | "no" | null> = {};
      questions.forEach((q) => (initialState[q.id] = null));
      return initialState;
    }
  );

  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (id: number, value: "yes" | "no") => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const getScore = () => {
    return Object.values(answers).filter((a) => a === "yes").length;
  };

  const getResultMessage = () => {
    const score = getScore();
    if (score >= 4) return "✅ You’re likely in ketosis.";
    if (score >= 2) return "🤔 You're on your way, but not quite there.";
    return "❌ You’re likely not in ketosis yet.";
  };

  const handleSubmit = () => {
    if (Object.values(answers).includes(null)) {
      alert("Please answer all questions.");
      return;
    }
    setShowResult(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🧪 Ketosis Indicator Quiz
        </h1>

        {!showResult ? (
          <>
            <p className="text-gray-600 text-center mb-6">
              Answer the questions below to get an estimate of whether you're
              likely in ketosis.
            </p>

            <div className="space-y-6">
              {questions.map((q) => (
                <div key={q.id}>
                  <p className="text-lg font-medium text-gray-800 mb-2">
                    {q.text}
                  </p>
                  <div className="flex gap-4">
                    <button
                      className={`px-4 py-2 rounded-lg ${
                        answers[q.id] === "yes"
                          ? "bg-green-600 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => handleAnswer(q.id, "yes")}
                    >
                      Yes
                    </button>
                    <button
                      className={`px-4 py-2 rounded-lg ${
                        answers[q.id] === "no"
                          ? "bg-red-600 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => handleAnswer(q.id, "no")}
                    >
                      No
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleSubmit}
              className="mt-8 w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition"
            >
              Get My Results
            </button>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Result:
            </h2>
            <p className="text-xl text-indigo-700">{getResultMessage()}</p>

            <button
              onClick={() => {
                setAnswers(() => {
                  const reset: Record<number, "yes" | "no" | null> = {};
                  questions.forEach((q) => (reset[q.id] = null));
                  return reset;
                });
                setShowResult(false);
              }}
              className="mt-6 px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

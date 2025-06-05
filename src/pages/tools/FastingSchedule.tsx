import React, { useState } from "react";

export const FastingSchedule: React.FC = () => {
  const [wakeTime, setWakeTime] = useState("");
  const [bedTime, setBedTime] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [schedules, setSchedules] = useState<string[]>([]);

  const handleGenerate = () => {
    if (!wakeTime || !bedTime) {
      alert("Please enter both wake and bed times.");
      return;
    }

    const scheduleSuggestions = [
      `🥗 16:8 Schedule — Eat between ${wakeTime} and ${calculateEndTime(
        wakeTime,
        8
      )}.`,
      `🍳 18:6 Schedule — Eat between ${wakeTime} and ${calculateEndTime(
        wakeTime,
        6
      )}.`,
      `🥄 OMAD — One meal around ${calculateMidTime(wakeTime, bedTime)}.`,
    ];

    setSchedules(scheduleSuggestions);
  };

  const calculateEndTime = (start: string, hours: number): string => {
    const [h, m] = start.split(":").map(Number);
    const date = new Date();
    date.setHours(h + hours);
    date.setMinutes(m);
    return date.toTimeString().slice(0, 5);
  };

  const calculateMidTime = (start: string, end: string): string => {
    const [startH, startM] = start.split(":").map(Number);
    const [endH, endM] = end.split(":").map(Number);
    const startTotal = startH * 60 + startM;
    const endTotal = endH * 60 + endM;
    const midTotal = Math.floor((startTotal + endTotal) / 2);
    const midH = Math.floor(midTotal / 60);
    const midM = midTotal % 60;
    return `${String(midH).padStart(2, "0")}:${String(midM).padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🕒 Fasting Schedule Generator
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 mb-8">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Wake Time
            </label>
            <input
              type="time"
              value={wakeTime}
              onChange={(e) => setWakeTime(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Bedtime
            </label>
            <input
              type="time"
              value={bedTime}
              onChange={(e) => setBedTime(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Activity Level
            </label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="sedentary">Sedentary</option>
              <option value="moderate">Moderately Active</option>
              <option value="active">Very Active</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          className="w-full cta-dark text-white font-semibold py-3 rounded-xl transition"
        >
          Generate Schedule
        </button>

        {schedules.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              Your Suggested Schedules:
            </h2>
            <p className="mb-5">
              <strong>Fasting:Eating</strong>
            </p>
            <ul className="space-y-3">
              {schedules.map((schedule, index) => (
                <li
                  key={index}
                  className="bg-gray-100 rounded-lg px-4 py-3 text-gray-700"
                >
                  {schedule}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

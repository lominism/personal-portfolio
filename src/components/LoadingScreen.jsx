import { useEffect, useRef, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const fullText = "I drink and I know things.";
  const intervalRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    intervalRef.current = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(intervalRef.current);
        setTimeout(() => {
          setDone(true);
          onComplete();
        }, 1000);
      }
    }, 75); // This adjust the typing speed

    return () => clearInterval(intervalRef.current);
  }, [onComplete]);

  // Handler to skip animation
  const handleSkip = () => {
    if (done) return;
    clearInterval(intervalRef.current);
    setText(fullText);
    setDone(true);
    setTimeout(() => {
      onComplete();
    }, 300); // Shorter delay for instant feedback
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center"
      onClick={handleSkip}
      onTouchStart={handleSkip}
      style={{ cursor: "pointer" }}
      title="Tap or click to skip"
    >
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

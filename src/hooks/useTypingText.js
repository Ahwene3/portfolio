import { useEffect, useState } from "react";

export function useTypingText(texts, typingSpeed = 70, deletingSpeed = 35, pause = 1500) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex % texts.length];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else if (isDeleting && displayedText.length > 0) {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        } else if (!isDeleting && displayedText.length === currentText.length) {
          setIsDeleting(true);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => prev + 1);
        }
      },
      !isDeleting && displayedText === currentText ? pause : isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, pause, textIndex, texts, typingSpeed, deletingSpeed]);

  return displayedText;
}

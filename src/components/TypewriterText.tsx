import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  phrases,
  typingSpeed = 50,
  deletingSpeed = 25,
  pauseDuration = 2200,
  className = '',
  cursorClassName = '',
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[currentPhraseIndex];

    if (!isDeleting) {
      // Typing phase
      if (currentText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing phrase, pause before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting phase
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-block ${className}`}>
      <span>{currentText}</span>
      <span
        aria-hidden="true"
        className={`inline-block w-[3px] sm:w-[4px] h-[1em] ml-1 bg-emerald-400 align-baseline animate-pulse ${cursorClassName}`}
      />
    </span>
  );
};

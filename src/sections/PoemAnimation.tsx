import React from "react";

interface PoemAnimationProps {
  poemText: string;
  backgroundImageUrl: string;
  boyImageUrl: string;
}

const hideOnError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.display = "none";
};

export const PoemAnimation = ({
  poemText,
  backgroundImageUrl,
  boyImageUrl,
}: PoemAnimationProps) => {
  return (
    <section className="poem-scene" aria-label="Featured interior scene">
      <img
        className="poem-scene__background"
        src={backgroundImageUrl}
        alt="Modern interior with a dramatic illuminated ceiling"
        onError={hideOnError}
      />
      <img
        className="poem-scene__figures"
        src={boyImageUrl}
        alt="Two people standing together"
        onError={hideOnError}
      />
      <div className="poem-scene__color-wash" aria-hidden="true" />
      {poemText.trim() && (
        <div className="poem-scene__poem" aria-label={poemText}>
          <span>{poemText}</span>
        </div>
      )}
    </section>
  );
};
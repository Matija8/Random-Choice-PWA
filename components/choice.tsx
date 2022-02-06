import { CSSProperties, ReactNode, useState } from 'react';

const choicePlaceholderText = 'No choice yet made!';
const getInitialOptions = () => ['', ''];
const colFlex: CSSProperties = { display: 'flex', flexDirection: 'column' };

function chooseFrom<T>(choices: T[]): [T, number] {
  if (choices.length < 1) {
    throw Error("Can't choose from an empty array!");
  }
  const index = Math.floor(Math.random() * choices.length);
  return [choices[index], index];
}

export function RandomChoice(): JSX.Element {
  const [choice, setChoice] = useState(choicePlaceholderText);
  const [options, setOptions] = useState<string[]>(getInitialOptions());
  const [choiceNum, setChoiceNum] = useState(0);

  function setChoicInc(text: string) {
    setChoiceNum(choiceNum + 1);
    setChoice(text);
  }

  return (
    <div style={{ width: 'min(600px, 90vw)', margin: 'auto' }}>
      <form
        style={{ ...colFlex, gap: '2rem' }}
        onSubmit={(ev) => ev.preventDefault()}
      >
        <section style={{ ...colFlex }}>
          <span>Choice count: {choiceNum}</span>
          <span>Chosen: {choice}</span>
        </section>

        <section style={{ ...colFlex }}>
          <button
            type="button"
            onClick={() => {
              setOptions(['', ...options]);
            }}
          >
            +
          </button>

          {options.map((option, currentOptionIdx) => (
            <article
              key={currentOptionIdx}
              style={{ display: 'flex', width: '100%' }}
            >
              <label
                htmlFor={`choice-${currentOptionIdx}`}
                style={{
                  width: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {currentOptionIdx + 1}
              </label>
              <input
                type="text"
                id={`choice-${currentOptionIdx}`}
                style={{ flexGrow: 1 }}
                value={option}
                onChange={(ev) =>
                  setOptions(
                    options.map((op, idx2) =>
                      currentOptionIdx !== idx2 ? op : ev.target.value,
                    ),
                  )
                }
              />
              <button
                style={{ width: '2rem', padding: '0.5rem' }}
                onClick={() =>
                  setOptions(
                    options.filter((_, idx2) => idx2 !== currentOptionIdx),
                  )
                }
              >
                X
              </button>
            </article>
          ))}
        </section>

        <section style={{ ...colFlex }}>
          <button
            type="button"
            onClick={() => {
              const nonEmptyOptions = options
                .map((text, index) => ({ text: text.trim(), index }))
                .filter(({ text }) => Boolean(text));
              if (nonEmptyOptions.length < 2) {
                setChoicInc("Can't choose from less than 2 non-empty options!");
                return;
              }
              const [choice] = chooseFrom(nonEmptyOptions);
              setChoicInc(`${choice.index + 1} - ${choice.text}`);
            }}
          >
            Make a choice!
          </button>
          <button
            type="button"
            onClick={() => {
              setChoiceNum(0);
              setChoice(choicePlaceholderText);
              setOptions(getInitialOptions());
            }}
          >
            Reset
          </button>
        </section>
      </form>
    </div>
  );
}

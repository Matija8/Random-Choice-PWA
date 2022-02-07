import { CSSProperties, ReactNode, useEffect, useState } from 'react';
import { Button } from 'components/button';
import { TextField } from 'components/textField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

const choicePlaceholderText = 'No choice yet made!';
const getInitialOptions = () => ['', ''];
const colFlex: CSSProperties = { display: 'flex', flexDirection: 'column' };
const colors = {
  red1: 'rgb(220 38 38)',
  green1: 'rgb(22 101 52)',
};
const buttonPadding = '0.5rem';
function choiceHtmlIdFromIdx(idx: number) {
  return `choice-${idx}`;
}

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

  function focusChoiceField(idx: number) {
    const elem = document.getElementById(choiceHtmlIdFromIdx(idx));
    elem?.focus?.();
  }

  useEffect(() => {
    focusChoiceField(0);
  }, []);

  function addChoiceField() {
    setOptions(['', ...options]);
    focusChoiceField(0);
  }

  function focusNextChoiceField() {
    const idx = options.findIndex((opt) => opt === '');
    if (idx >= 0) {
      focusChoiceField(idx);
      return;
    }
    addChoiceField();
  }

  return (
    <form
      style={{
        ...colFlex,
        width: 'min(600px, 90vw)',
        margin: 'auto',
        gap: '1rem',
        height: '100%',
      }}
      onSubmit={(ev) => ev.preventDefault()}
    >
      <section style={{ ...colFlex }}>
        <Typography variant="body2">Choice count: {choiceNum}</Typography>
        <Typography variant="h5" style={{ height: '3rem' }}>
          Chosen: {choice}
        </Typography>
      </section>

      <Button
        style={{ padding: buttonPadding }}
        onClick={() => addChoiceField()}
      >
        <AddIcon />
      </Button>

      <section
        style={{
          ...colFlex,
          flexGrow: 1,
          overflowY: 'auto',
        }}
      >
        {options.map((option, currentOptionIdx) => (
          <article
            key={currentOptionIdx}
            style={{ display: 'flex', width: '100%' }}
          >
            <label
              htmlFor={choiceHtmlIdFromIdx(currentOptionIdx)}
              style={{
                width: '2rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {currentOptionIdx + 1}
            </label>
            <TextField
              type="text"
              id={choiceHtmlIdFromIdx(currentOptionIdx)}
              style={{ flexGrow: 1 }}
              value={option}
              onChange={(ev) =>
                setOptions(
                  options.map((op, idx2) =>
                    currentOptionIdx !== idx2 ? op : ev.target.value,
                  ),
                )
              }
              onKeyPress={(ev) => {
                if (ev.key === 'Enter') focusNextChoiceField();
              }}
            />
            <IconButton
              tabIndex={-1}
              onClick={() =>
                setOptions(
                  options.filter((_, idx2) => idx2 !== currentOptionIdx),
                )
              }
            >
              <CloseIcon />
            </IconButton>
          </article>
        ))}
      </section>

      <section style={{ ...colFlex, gap: '1px', marginBottom: '3rem' }}>
        <Button
          style={{ backgroundColor: colors.green1, padding: buttonPadding }}
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
        </Button>
        <Button
          style={{ backgroundColor: colors.red1, padding: buttonPadding }}
          onClick={() => {
            setChoiceNum(0);
            setChoice(choicePlaceholderText);
            setOptions(getInitialOptions());
          }}
        >
          Reset
        </Button>
      </section>
    </form>
  );
}

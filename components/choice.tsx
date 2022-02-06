import { CSSProperties, ReactNode, useState } from 'react';
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
          <Typography variant="body2">Choice count: {choiceNum}</Typography>
          <Typography variant="h5" style={{ height: '3rem' }}>
            Chosen: {choice}
          </Typography>
        </section>

        <section style={{ ...colFlex, minHeight: '300px' }}>
          <Button
            style={{ marginBottom: '2px' }}
            onClick={() => {
              setOptions(['', ...options]);
            }}
          >
            <AddIcon />
          </Button>

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
              <TextField
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
              <IconButton
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

        <section style={{ ...colFlex, gap: '1px' }}>
          <Button
            style={{ backgroundColor: colors.green1 }}
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
            style={{ backgroundColor: colors.red1 }}
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
    </div>
  );
}

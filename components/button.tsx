import MuiButton from '@mui/material/Button';

export function Button(props: React.ComponentProps<typeof MuiButton>) {
  return <MuiButton variant="contained" type="button" {...props} />;
}

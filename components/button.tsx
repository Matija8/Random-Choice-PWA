import styles from './button.module.scss';

export function Button(props: React.ComponentProps<'button'>) {
  return <button className={styles.button} type="button" {...props} />;
}

export function IconButton(props: React.ComponentProps<'button'>) {
  return <button className={styles.iconButton} type="button" {...props} />;
}

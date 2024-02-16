import styles from './text-field.module.scss';

export function TextField(props: React.ComponentProps<'input'>) {
  return <input className={styles.textfield} type="text" {...props} />;
}

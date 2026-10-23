import styles from './SectionTitle.module.css'

type Props = {
  /** 見出しの前に付く番号（例: '01'） */
  number: string
  children: string
}

export function SectionTitle({ number, children }: Props) {
  return (
    <h2 className={styles.title}>
      <span className={styles.number}>{number}</span>
      {children}
    </h2>
  )
}

import styles from './Footer.module.css'

export function Footer({ name }: { name: string }) {
  return (
    <footer className={styles.footer}>
      <small>
        &copy; {new Date().getFullYear()} {name}
      </small>
    </footer>
  )
}

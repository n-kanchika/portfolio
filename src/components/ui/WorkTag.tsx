import type { WorkGenre } from '@/types'
import styles from './WorkTag.module.css'

const labels: Record<WorkGenre, string> = {
  work: '仕事',
  private: '個人開発',
}

export function WorkTag({ genre }: { genre: WorkGenre }) {
  return <span className={`${styles.tag} ${styles[genre]}`}>{labels[genre]}</span>
}

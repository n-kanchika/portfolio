import { Link } from 'react-router'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { WorkTag } from '@/components/ui/WorkTag'
import type { Work } from '@/types'
import styles from './Works.module.css'

export function Works({ works }: { works: Work[] }) {
  return (
    <section id="works">
      <SectionTitle number="01">Works</SectionTitle>
      <ul className={styles.list}>
        {works.map((work) => (
          <li key={work.id}>
            <Link to={`/works/${work.id}`} className={styles.row}>
              <span className={styles.year}>{work.startedAt?.slice(0, 4)}</span>
              <div className={styles.body}>
                <h3 className={styles.title}>
                  {work.title}
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </h3>
                {work.client && <p className={styles.client}>{work.client}</p>}
                <div className={styles.meta}>
                  <WorkTag genre={work.genre} />
                  {work.tags?.map((tag) => (
                    <span key={tag} className={styles.tech}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.thumb}>
                <img src={work.thumbnail.url} alt="" loading="lazy" width={800} height={500} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

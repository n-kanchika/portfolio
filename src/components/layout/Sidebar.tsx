import { Link, useLocation } from 'react-router'
import { useActiveSection } from '@/hooks/useActiveSection'
import type { Profile } from '@/types'
import styles from './Sidebar.module.css'

const navItems = [
  { id: 'works', label: 'Works' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
const sectionIds = navItems.map((item) => item.id)

export function Sidebar({ profile }: { profile: Profile }) {
  const { pathname } = useLocation()
  const activeId = useActiveSection(sectionIds, pathname === '/')

  return (
    <header className={styles.sidebar}>
      <div>
        <Link to="/" className={styles.name}>
          {profile.name}
        </Link>
        <p className={styles.role}>{profile.role}</p>
        <p className={styles.intro}>{profile.introduction}</p>

        <nav aria-label="ページ内ナビゲーション">
          <ol className={styles.nav}>
            {navItems.map((item, i) => (
              <li key={item.id}>
                <Link
                  to={{ pathname: '/', hash: `#${item.id}` }}
                  className={styles.navLink}
                  aria-current={activeId === item.id ? 'true' : undefined}
                >
                  <span className={styles.navNumber}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.navLine} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <ul className={styles.sns}>
        {profile.sns.map((sns) => (
          <li key={sns.url}>
            <a href={sns.url} target="_blank" rel="noopener noreferrer">
              {sns.name} ↗
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}

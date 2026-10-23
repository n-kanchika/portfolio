import { SectionTitle } from '@/components/ui/SectionTitle'
import type { Profile } from '@/types'
import styles from './Contact.module.css'

export function Contact({ profile }: { profile: Profile }) {
  return (
    <section id="contact">
      <SectionTitle number="03">Contact</SectionTitle>
      {profile.contactMessage && <p className={styles.message}>{profile.contactMessage}</p>}
      {profile.email && (
        <a href={`mailto:${profile.email}`} className={styles.email}>
          {profile.email}
          <span aria-hidden="true"> →</span>
        </a>
      )}
      <ul className={styles.snsList}>
        {profile.sns.map((sns) => (
          <li key={sns.url}>
            <a href={sns.url} target="_blank" rel="noopener noreferrer">
              {sns.name} ↗
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

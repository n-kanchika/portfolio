import { SectionTitle } from '@/components/ui/SectionTitle'
import { SkillIcon } from '@/components/ui/SkillIcon'
import type { Skill } from '@/types'
import { experienceSince } from '@/utils/period'

import styles from './Skills.module.css'

/** category ごとにまとめる（並び順はデータに出てきた順） */
function groupByCategory(skills: Skill[]) {
  const groups = new Map<string, Skill[]>()
  for (const skill of skills) {
    const list = groups.get(skill.category) ?? []
    list.push(skill)
    groups.set(skill.category, list)
  }
  return [...groups]
}

// レベルの凡例
const LEVEL_LEGEND = [
  { level: 5, label: '実務経験があり特に熟知している' },
  { level: 4, label: '実務経験あり' },
  { level: 3, label: '実務経験はあるが使用期間が短い' },
  { level: 2, label: '個人開発の経験あり' },
  { level: 1, label: '基本的な学習を終えた' },
] as const

export function Skills({ skills }: { skills: Skill[] }) {
  return (
    <section id="skills">
      <SectionTitle number="02">Skills</SectionTitle>
      <div className={styles.groups}>
        {groupByCategory(skills).map(([category, items]) => (
          <div key={category} className={styles.group}>
            <h3 className={styles.category}>{category}</h3>
            <ul>
              {items.map((skill) => (
                <li key={skill.id} className={styles.item}>
                  <div className={styles.line}>
                    <span className={styles.name}>
                      <SkillIcon id={skill.id} className={styles.icon} />
                      {skill.name}
                    </span>
                    <span className={styles.dots} />
                    <span className={styles.years}>{experienceSince(skill.startedAt)}</span>
                  </div>
                  {skill.description && <p className={styles.description}>{skill.description}</p>}
                  {skill.level && <p className={styles.level}>
                    <span aria-hidden="true">{'★'.repeat(skill.level)}</span>
                    <span className="visually-hidden">レベル：{skill.level}（5段階中）</span>
                  </p>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <dl className={styles.legend}>
        {LEVEL_LEGEND.map(({ level, label }) => (
          <div key={level} className={styles.legendItem}>
            <dt aria-label={`レベル ${level}`}>{'★'.repeat(level)}</dt>
            <dd>{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

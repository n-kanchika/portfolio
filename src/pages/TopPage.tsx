import { useLoaderData, useRouteLoaderData } from 'react-router'
import { Contact } from '@/components/sections/Contact'
import { Skills } from '@/components/sections/Skills'
import { Works } from '@/components/sections/Works'
import type { loader as rootLoader } from '@/components/layout/RootLayout'
import { getSkills, getWorks } from '@/lib/api'
import styles from './TopPage.module.css'

export async function loader() {
  const [works, skills] = await Promise.all([getWorks(), getSkills()])
  return { works, skills }
}

export function TopPage() {
  const { works, skills } = useLoaderData<typeof loader>()
  // プロフィールは RootLayout（id: 'root'）で読み込み済みのものを使う
  const profile = useRouteLoaderData<typeof rootLoader>('root')!

  return (
    <div className={styles.sections}>
      <Works works={works} />
      <Skills skills={skills} />
      <Contact profile={profile} />
    </div>
  )
}

import { Outlet, ScrollRestoration, useLoaderData } from 'react-router'

import { getProfile } from '@/lib/api'

import { Footer } from './Footer'
import styles from './RootLayout.module.css'
import { Sidebar } from './Sidebar'

// サイドバーは全ページ共通なので、プロフィールはここで読み込む
export async function loader() {
  return getProfile()
}

export function RootLayout() {
  const profile = useLoaderData<typeof loader>()

  return (
    <div className={styles.layout}>
      <Sidebar profile={profile} />
      <div className={styles.main}>
        <main>
          <Outlet />
        </main>
        <Footer name={profile.name} />
      </div>
      {/* ページ遷移時のスクロール位置復元＋ #hash 付き遷移で該当要素へスクロール */}
      <ScrollRestoration />
    </div>
  )
}

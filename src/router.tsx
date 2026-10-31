import { createBrowserRouter } from 'react-router'

import { loader as rootLoader,RootLayout } from '@/components/layout/RootLayout'
import { ErrorPage } from '@/pages/ErrorPage'
import { loader as topLoader, TopPage } from '@/pages/TopPage'
import { loader as workDetailLoader,WorkDetailPage } from '@/pages/WorkDetailPage'

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: RootLayout,
    loader: rootLoader,
    // プロフィール取得に失敗した場合など、レイアウトごと表示できないときのエラー画面
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, Component: TopPage, loader: topLoader },
          { path: 'works/:workId', Component: WorkDetailPage, loader: workDetailLoader },
          { path: '*', loader: () => { throw new Response('Not Found', { status: 404 }) } },
        ],
      },
    ],
  },
])

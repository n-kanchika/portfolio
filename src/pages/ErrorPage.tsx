import { isRouteErrorResponse, Link, useRouteError } from 'react-router'
import styles from './ErrorPage.module.css'

export function ErrorPage() {
  const error = useRouteError()
  const isNotFound = isRouteErrorResponse(error) && error.status === 404

  return (
    <div className={styles.wrapper}>
      <title>{isNotFound ? 'ページが見つかりません' : 'エラーが発生しました'}</title>
      <h1 className={styles.title}>{isNotFound ? '404 Not Found' : 'Error'}</h1>
      <p>{isNotFound ? 'お探しのページは見つかりませんでした。' : '読み込み中にエラーが発生しました。'}</p>
      <Link to="/" className={styles.link}>
        トップへ戻る
      </Link>
    </div>
  )
}

import { Link, type LoaderFunctionArgs,useLoaderData, useRouteLoaderData } from 'react-router'

import type { loader as rootLoader } from '@/components/layout/RootLayout'
import { GithubIcon } from '@/components/ui/GithubIcon'
import { ImageSlider } from '@/components/ui/ImageSlider'
import { WorkTag } from '@/components/ui/WorkTag'
import { getWork } from '@/lib/api'
import { formatYearMonth, workPeriod } from '@/utils/period'

import styles from './WorkDetailPage.module.css'

export async function loader({ params }: LoaderFunctionArgs) {
  return getWork(params.workId ?? '')
}

export function WorkDetailPage() {
  const work = useLoaderData<typeof loader>()
  const profile = useRouteLoaderData<typeof rootLoader>('root')!
  const duration = work.duration ?? workPeriod(work.startedAt, work.endedAt)
  const range = work.startedAt
    ? `${formatYearMonth(work.startedAt)} – ${work.endedAt ? formatYearMonth(work.endedAt) : '現在'}`
    : null
  const images = [work.thumbnail, ...(work.images?.map((i) => i.image) ?? [])]

  return (
    <article>
      <title>{`${work.title} | ${profile.name}`}</title>

      <Link to={{ pathname: '/', hash: '#works' }} className={styles.back}>
        ← Works
      </Link>

      <header className={styles.head}>
        <WorkTag genre={work.genre} />
        <h1 className={styles.title}>{work.title}</h1>
        {work.client && <p className={styles.client}>{work.client}</p>}
      </header>

      <div className={styles.slider}>
        <ImageSlider images={images} alt={work.title} />
      </div>

      <dl className={styles.meta}>
        {range && (
          <div>
            <dt>Period</dt>
            <dd>
              {range}
              {duration && `（${duration}）`}
            </dd>
          </div>
        )}
        {work.team && (
          <div>
            <dt>Team</dt>
            <dd>{work.team}</dd>
          </div>
        )}
        {work.roles && (
          <div>
            <dt>Role</dt>
            <dd>{work.roles.join(' / ')}</dd>
          </div>
        )}
        {work.phases && (
          <div>
            <dt>Process</dt>
            <dd>{work.phases.join(' / ')}</dd>
          </div>
        )}
        {work.duties && (
          <div>
            <dt>Tasks</dt>
            <dd>{work.duties.join(' / ')}</dd>
          </div>
        )}
        {work.environment && (
          <div>
            <dt>Environment</dt>
            <dd>{work.environment.join(' / ')}</dd>
          </div>
        )}
        {work.repositoryUrl && (
          <div>
            <dt>Repository</dt>
            <dd>
              <a href={work.repositoryUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <GithubIcon />
                GitHub ↗
              </a>
            </dd>
          </div>
        )}
      </dl>

      {work.contents.map((content) => (
        <section key={content.title} className={styles.content}>
          <h2>{content.title}</h2>
          {/* CMS のリッチエディタ出力（自分だけが入稿する前提）。第三者が入稿するなら DOMPurify 等でサニタイズすること */}
          <div className={styles.text} dangerouslySetInnerHTML={{ __html: content.text }} />
        </section>
      ))}
    </article>
  )
}

/** microCMS の画像フィールドと同じ形 */
export type CmsImage = {
  url: string
  width?: number
  height?: number
}

export type WorkGenre = 'work' | 'private'

export type WorkContent = {
  title: string
  /** リッチエディタ想定の HTML 文字列 */
  text: string
}

export type Work = {
  id: string
  title: string
  client?: string
  genre: WorkGenre
  thumbnail: CmsImage
  images?: { image: CmsImage }[]
  /** 'YYYY-MM' 形式 */
  startedAt?: string
  endedAt?: string
  /** 期間の表記を手入力で上書きしたいとき（例: '2ヶ月'）。無ければ startedAt〜endedAt から自動計算 */
  duration?: string
  /** 開発規模・役割（例: 'PM 1名 / 実装者 3名'） */
  team?: string
  /** 役割（例: '実装者'） */
  roles?: string[]
  /** 担当工程 */
  phases?: string[]
  /** 業務内容（例: '各種資料の作成'） */
  duties?: string[]
  /** 開発環境・使用技術 */
  tags?: string[]
  /** 詳細ページの開発環境（バージョン込み） */
  environment?: string[]
  contents: WorkContent[]
}

export type Skill = {
  id: string
  /** 表示上のグループ名（例: 'Frontend'） */
  category: string
  name: string
  /** 'YYYY-MM' 形式。経験年数の算出に使う */
  startedAt: string
  description?: string
  level?: number
}

export type SnsLink = {
  name: string
  url: string
}

export type Profile = {
  name: string
  role: string
  avatar?: CmsImage
  introduction: string
  sns: SnsLink[]
  email?: string
  /** CONTACT セクションの案内文 */
  contactMessage?: string
}

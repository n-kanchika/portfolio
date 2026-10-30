import type { Profile, Skill, Work } from '@/types'
import atteImg from '@/assets/imgs/works/attendance.png'
import reseImg from '@/assets/imgs/works/rese.jpg'

// 実案件（genre: 'work'）は works.private.ts に分離して git 管理外にしている
// ファイルが無い環境（clone 直後・CI など）では空になり、個人開発の作品だけが表示される
const privateModules = import.meta.glob<Work[]>('./works.private.ts', { eager: true, import: 'privateWorks' })
const privateWorks = Object.values(privateModules).flat()

// 配列の順番がそのまま表示順（新しい案件を上に）。実案件は個人開発より上に並べる
export const mockWorks: Work[] = [
  ...privateWorks,
  {
    id: 'restaurant-reservation',
    title: '飲食店予約アプリ開発',
    genre: 'private',
    thumbnail: { url: reseImg, width: 1600, height: 957 },
    startedAt: '2024-08',
    endedAt: '2024-10',
    duration: '2ヶ月',
    team: '1名',
    phases: ['詳細設計', '製造', 'テスト', '修正'],
    tags: ['HTML / CSS', 'PHP（Laravel）', 'MySQL', 'Docker', 'Git'],
    environment: ['HTML / CSS', 'PHP 8.3（Laravel 8.83）', 'MySQL', 'Docker', 'Git'],
    repositoryUrl: 'https://github.com/n-kanchika/rese',
    contents: [
      {
        title: '概要',
        text: `
          <ul>
            <li>ユーザーは飲食店の予約やお気に入り登録、レビューなどをすることができ、お店側は店舗の作成、店舗情報の更新や QR コードによる予約確認などができるアプリを作成させて頂きました。</li>
            <li>Laravel を用いてフロントエンド、バックエンドを全て担当しました。</li>
          </ul>`,
      },
      {
        title: '機能一覧',
        text: `
          <ul>
            <li>会員登録・ログイン・ログアウト機能</li>
            <li>ユーザー情報取得機能</li>
            <li>お気に入り一覧取得機能</li>
            <li>ユーザー別予約情報取得機能</li>
            <li>飲食店一覧取得・詳細取得機能</li>
            <li>飲食店お気に入り追加・削除機能</li>
            <li>飲食店予約追加・変更・削除機能</li>
            <li>エリア・ジャンル・店名検索機能</li>
            <li>店舗一覧ソート機能</li>
            <li>飲食店評価機能</li>
            <li>口コミ機能・口コミの編集・削除機能</li>
            <li>店舗追加・編集機能（店舗代表者権限）</li>
            <li>店舗ごとの予約情報取得機能（店舗代表者権限）</li>
            <li>QR コードによる予約状況表示機能（店舗代表者権限）</li>
            <li>店舗代表者作成機能（管理者権限）</li>
            <li>利用者への一斉メール送信機能（管理者権限）</li>
            <li>全口コミ削除機能（管理者権限）</li>
            <li>CSV インポート機能（管理者権限）</li>
            <li>スケジューラーを用いたユーザー自動削除機能</li>
            <li>スケジューラーを用いたリマインダーメール自動送信機能</li>
          </ul>`,
      },
    ],
  },
  {
    id: 'attendance-app',
    title: '業務用勤怠管理の Web アプリ開発',
    genre: 'private',
    thumbnail: { url: atteImg, width: 1706, height: 998 },
    startedAt: '2024-06',
    endedAt: '2024-08',
    duration: '2ヶ月',
    team: '1名',
    phases: ['詳細設計', '製造', 'テスト', '修正'],
    tags: ['HTML / CSS', 'PHP（Laravel）', 'MySQL', 'Docker', 'Git'],
    environment: ['HTML / CSS', 'PHP 7.4（Laravel 8.83）', 'MySQL', 'Docker', 'Git'],
    repositoryUrl: 'https://github.com/n-kanchika/attendance',
    contents: [
      {
        title: '概要',
        text: `
          <ul>
            <li>出退勤ができるアプリを開発させて頂きました。</li>
            <li>Laravel を用いてフロントエンド、バックエンドを全て担当しました。</li>
          </ul>`,
      },
      {
        title: '機能一覧',
        text: `
          <ul>
            <li>会員登録・ログイン・ログアウト機能</li>
            <li>メール認証機能</li>
            <li>勤務開始・勤務終了機能</li>
            <li>休憩開始・休憩終了機能</li>
            <li>日付別勤怠情報取得機能</li>
            <li>ユーザー別勤怠情報取得機能</li>
            <li>ページネーション機能</li>
            <li>スケジューラーを用いた自動打刻機能</li>
            <li>スケジューラーを用いたユーザー自動削除機能</li>
          </ul>`,
      },
    ],
  },
]

// category が同じものは同じグループにまとめて表示される（グループの並び順は最初に出てきた順）
export const mockSkills: Skill[] = [
  { id: 'html-css', category: 'Frontend', name: 'HTML / CSS', startedAt: '2024-06', description: 'セマンティックなマークアップ、レスポンシブ対応', level: 5 },
  { id: 'php-laravel', category: 'Backend', name: 'PHP / Laravel', startedAt: '2024-06', description: 'マルチガード認証、ミドルウェア、Observer、バッチ処理、Livewire', level: 5 },
  { id: 'mysql', category: 'Backend', name: 'MySQL', startedAt: '2024-06', description: 'テーブル設計、マイグレーション管理', level: 4 },
  { id: 'git', category: 'Tools', name: 'Git / GitHub', startedAt: '2024-06', description: 'Azure DevOps でのチーム開発', level: 4 },
  { id: 'docker', category: 'Tools', name: 'Docker', startedAt: '2024-06', description: 'Laravel 開発環境の構築・運用', level: 4 },
  { id: 'javascript', category: 'Frontend', name: 'JavaScript', startedAt: '2025-06', description: 'Vanilla JS・jQuery による機能実装、CKEditor のカスタマイズ', level: 4 },
]

export const mockProfile: Profile = {
  name: 'NANA KANCHIKA',
  role: 'Web Engineer',
  introduction: '5年間教員を勤めた後、Web制作の仕事に転職。\nPHP（Laravel）とJavaScript、HTML/CSSを用いたプロジェクトで1年9ヶ月間フロントエンド・バックエンドの実務を経験。\n現在はReact + TypeScriptを用いたフロントエンド開発に注力している。',
  sns: [
    { name: 'GitHub', url: 'https://github.com/' },
  ],
  email: 'xxx@gmail.com',
  contactMessage: '現在お仕事の受注は停止しております。再開時期は未定です。',
  // contactMessage: 'お仕事のご相談・ご依頼は、メールからお気軽にどうぞ。',
}

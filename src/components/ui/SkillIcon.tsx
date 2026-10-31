import type { IconType } from 'react-icons'
import { SiDocker, SiGit, SiHtml5, SiJavascript, SiLaravel, SiMysql } from 'react-icons/si'

// アイコンは CMS に持たせず、スキルの id から引く（未登録の id は表示しない）
const ICONS: Record<string, { icon: IconType; color: string }> = {
  'html-css': { icon: SiHtml5, color: '#E34F26' },
  'php-laravel': { icon: SiLaravel, color: '#FF2D20' },
  mysql: { icon: SiMysql, color: '#4479A1' },
  git: { icon: SiGit, color: '#F05032' },
  docker: { icon: SiDocker, color: '#2496ED' },
  javascript: { icon: SiJavascript, color: '#F7DF1E' },
}

export function SkillIcon({ id, className }: { id: string; className?: string }) {
  const entry = ICONS[id]
  if (!entry) return null

  const { icon: Icon, color } = entry
  return <Icon className={className} color={color} aria-hidden="true" />
}
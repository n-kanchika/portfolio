const parseYearMonth = (value: string) => {
  const [year, month] = value.split('-').map(Number)
  return { year, month }
}

/** 'YYYY-MM' 同士の月数（両端を含む） */
export const diffMonths = (from: string, to: string) => {
  const a = parseYearMonth(from)
  const b = parseYearMonth(to)
  return (b.year - a.year) * 12 + (b.month - a.month) + 1
}

const currentYearMonth = () => {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
}

/** 月数を「1年3ヶ月」のような表記にする */
export const formatMonths = (months: number) => {
  const years = Math.floor(months / 12)
  const rest = months % 12
  if (years === 0) return `${rest}ヶ月`
  return rest === 0 ? `${years}年` : `${years}年${rest}ヶ月`
}

/** 開始月から現在までの経験年数 */
export const experienceSince = (startedAt: string) => formatMonths(diffMonths(startedAt, currentYearMonth()))

/** 'YYYY-MM' → 'YYYY.MM' */
export const formatYearMonth = (value: string) => value.replace('-', '.')

/** 制作期間（終了月が無ければ現在まで） */
export const workPeriod = (startedAt?: string, endedAt?: string) => {
  if (!startedAt) return null
  return formatMonths(diffMonths(startedAt, endedAt ?? currentYearMonth()))
}

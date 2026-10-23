import { useEffect, useState } from 'react'

/**
 * 画面中央付近にあるセクションの id を返す（ナビの現在地表示用）
 * enabled が false のとき（トップ以外のページ）は常に null
 */
export function useActiveSection(ids: string[], enabled: boolean) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      // 画面の上から 40%〜50% の帯に入ったセクションを「現在地」とみなす
      { rootMargin: '-40% 0px -50% 0px' },
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids, enabled])

  return enabled ? activeId : null
}

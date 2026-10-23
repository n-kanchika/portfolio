import { mockProfile, mockSkills, mockWorks } from '@/data/mock'
import type { Profile, Skill, Work } from '@/types'

const serviceDomain = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN
const apiKey = import.meta.env.VITE_MICROCMS_API_KEY
/** 環境変数が揃っていれば microCMS、無ければモックデータを使う */
const cms = serviceDomain && apiKey ? { serviceDomain, apiKey } : null
const useCms = cms !== null

type ListResponse<T> = { contents: T[] }

async function cmsFetch<T>(path: string): Promise<T> {
  if (!cms) throw new Error('microCMS の環境変数が未設定')
  const res = await fetch(`https://${cms.serviceDomain}.microcms.io/api/v1/${path}`, {
    headers: { 'X-MICROCMS-API-KEY': cms.apiKey },
  })
  if (!res.ok) {
    throw new Response(res.statusText, { status: res.status })
  }
  return res.json() as Promise<T>
}

export async function getWorks(): Promise<Work[]> {
  if (!useCms) return mockWorks
  const data = await cmsFetch<ListResponse<Work>>('works?limit=100')
  return data.contents
}

export async function getWork(id: string): Promise<Work> {
  if (!useCms) {
    const work = mockWorks.find((w) => w.id === id)
    if (!work) throw new Response('Not Found', { status: 404 })
    return work
  }
  return cmsFetch<Work>(`works/${encodeURIComponent(id)}`)
}

export async function getSkills(): Promise<Skill[]> {
  if (!useCms) return mockSkills
  const data = await cmsFetch<ListResponse<Skill>>('skills?limit=100')
  return data.contents
}

export async function getProfile(): Promise<Profile> {
  if (!useCms) return mockProfile
  // microCMS の「オブジェクト形式」API を想定
  return cmsFetch<Profile>('profile')
}

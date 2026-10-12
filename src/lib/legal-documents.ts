export type LegalDocument = {
  id: string
  kind: 'terms' | 'privacy'
  version: string
  title: string
  content: string
  contentHash: string
  locale: string
  effectiveAt: string
  publishedAt: string
}
const base = (
  import.meta.env.VITE_PLAYERS_API_URL ||
  'https://api.icanchero.com/api/players'
).replace(/\/$/, '')
export async function fetchLegalDocument(
  kind: 'terms' | 'privacy',
  version?: string,
  signal?: AbortSignal,
): Promise<LegalDocument> {
  const url = `${base}/legal/documents/${kind}${version ? `?version=${encodeURIComponent(version)}` : ''}`
  const response = await fetch(url, { signal, credentials: 'omit' })
  if (!response.ok)
    throw new Error(
      response.status === 404
        ? 'Esta versión del documento no está disponible.'
        : 'No pudimos cargar el documento. Intenta nuevamente.',
    )
  return response.json()
}
export function legalVersionSearch(search: Record<string, unknown>): {
  version?: string
} {
  const version =
    typeof search.version === 'string' &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      search.version,
    )
      ? search.version
      : undefined
  return { version }
}

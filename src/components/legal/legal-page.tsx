import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import ReactMarkdown from 'react-markdown'
import { fetchLegalDocument } from '#/lib/legal-documents'
import type { LegalDocument } from '#/lib/legal-documents'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { SiteFooter } from '#/components/site-footer'

const markdownElements = [
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'ul',
  'ol',
  'li',
  'strong',
  'em',
  'blockquote',
  'a',
  'code',
  'pre',
  'hr',
  'br',
]
export function LegalPage({
  kind,
  version,
}: {
  kind: 'terms' | 'privacy'
  version?: string
}) {
  return (
    <LegalPageContent
      key={`${kind}:${version || 'current'}`}
      kind={kind}
      version={version}
    />
  )
}

function LegalPageContent({
  kind,
  version,
}: {
  kind: 'terms' | 'privacy'
  version?: string
}) {
  const [document, setDocument] = useState<LegalDocument | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [attempt, setAttempt] = useState(0)
  useEffect(() => {
    const controller = new AbortController()
    void fetchLegalDocument(kind, version, controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) setDocument(data)
      })
      .catch((e: unknown) => {
        if (!controller.signal.aborted)
          setError(
            e instanceof Error ? e.message : 'No pudimos cargar el documento.',
          )
      })
    return () => controller.abort()
  }, [kind, version, attempt])
  const title =
    kind === 'terms'
      ? 'Términos y Condiciones de Uso'
      : 'Política de Privacidad'
  return (
    <main className="site-bg min-h-screen">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 md:px-6 md:py-12">
        <img
          src="/assets/logos/logo-dark-horizontal.svg"
          alt="iCanchero"
          className="h-10"
        />
        <Link to="/" className="nav-link w-fit text-sm font-semibold">
          ← Volver al inicio
        </Link>
        <Card className="island-shell">
          <CardHeader className="flex flex-col gap-3">
            <CardTitle className="font-sans text-3xl">
              {document?.title || title}
            </CardTitle>
            <CardDescription>
              {document
                ? `Última actualización: ${new Date(document.effectiveAt).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}`
                : 'Documento legal de iCanchero'}
            </CardDescription>
          </CardHeader>
          <CardContent
            className="prose prose-slate max-w-none"
            aria-live="polite"
          >
            {error ? (
              <div role="alert">
                <p>{error}</p>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => {
                    setError(null)
                    setDocument(null)
                    setAttempt((v) => v + 1)
                  }}
                >
                  Reintentar
                </button>
              </div>
            ) : document ? (
              <ReactMarkdown allowedElements={markdownElements} skipHtml>
                {document.content}
              </ReactMarkdown>
            ) : (
              <p role="status">Cargando documento…</p>
            )}
          </CardContent>
        </Card>
      </div>
      <SiteFooter />
    </main>
  )
}

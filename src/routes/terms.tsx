import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '#/components/legal/legal-page'
import { legalVersionSearch } from '#/lib/legal-documents'

export const Route = createFileRoute('/terms')({
  head: () => ({ meta: [{ title: 'Términos y Condiciones | iCanchero' }] }),
  validateSearch: legalVersionSearch,
  component: TermsPage,
})
function TermsPage() {
  const { version } = Route.useSearch()
  return <LegalPage kind="terms" version={version} />
}

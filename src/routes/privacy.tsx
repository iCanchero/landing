import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '#/components/legal/legal-page'
import { legalVersionSearch } from '#/lib/legal-documents'

export const Route = createFileRoute('/privacy')({
  head: () => ({ meta: [{ title: 'Política de Privacidad | iCanchero' }] }),
  validateSearch: legalVersionSearch,
  component: PrivacyPage,
})
function PrivacyPage() {
  const { version } = Route.useSearch()
  return <LegalPage kind="privacy" version={version} />
}

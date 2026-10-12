// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react'
import { LegalPage } from './legal-page'

vi.mock('@tanstack/react-router', () => ({
  Link: ({ children }: { children: React.ReactNode }) => <a>{children}</a>,
}))
vi.mock('#/components/site-footer', () => ({ SiteFooter: () => <footer /> }))
const content = {
  id: 'a1000000-0000-0000-0000-000000000001',
  title: 'Términos y Condiciones de Uso',
  version: '2025-05-19.1',
  effectiveAt: '2025-05-19T00:00:00Z',
  content:
    '### Cuentas\n\nTexto desde la base.\n\n<script>alert(1)</script>\n\n![tracker](https://example.test/track)',
}
afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

describe('public legal documents', () => {
  it('loads an immutable release in the browser without credentials and suppresses HTML/images', async () => {
    const fetch = vi
      .fn()
      .mockResolvedValue({ ok: true, json: async () => content })
    vi.stubGlobal('fetch', fetch)
    const { container } = render(
      <LegalPage kind="terms" version={content.id} />,
    )
    expect(screen.getByRole('status').textContent).toContain('Cargando')
    await screen.findByText('Texto desde la base.')
    expect(fetch.mock.calls[0][0]).toContain(`?version=${content.id}`)
    expect(fetch.mock.calls[0][1].credentials).toBe('omit')
    expect(container.querySelector('script')).toBeNull()
    expect(
      container.querySelector('img[src="https://example.test/track"]'),
    ).toBeNull()
  })
  it('shows fetch failure and allows recovery instead of substituting stale static text', async () => {
    const fetch = vi
      .fn()
      .mockRejectedValueOnce(new Error('Sin conexión'))
      .mockResolvedValueOnce({ ok: true, json: async () => content })
    vi.stubGlobal('fetch', fetch)
    render(<LegalPage kind="terms" />)
    await screen.findByRole('alert')
    fireEvent.click(screen.getByRole('button', { name: 'Reintentar' }))
    await screen.findByText('Texto desde la base.')
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2))
  })
})

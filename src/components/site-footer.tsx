import { Link } from '@tanstack/react-router'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-8 md:px-6">
        <div className="text-muted-foreground flex flex-col gap-2 text-sm md:flex-row md:items-center md:justify-between">
          <p>© 2026 iCanchero. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy" className="nav-link">
              Política de Privacidad
            </Link>
            <Link to="/terms" className="nav-link">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

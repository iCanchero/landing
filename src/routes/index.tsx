import { createFileRoute, Link } from '@tanstack/react-router'
import { Badge } from '#/components/ui/badge'
import { SiteFooter } from '#/components/site-footer'

export const Route = createFileRoute('/')({ component: Home })

const posters = [
  'main.jpg',
  'a-la-cancha.jpg',
  'amigos.jpg',
  'facil.jpg',
  'familia.jpg',
  'tenis.jpg',
]

function Home() {
  return (
    <main className="min-h-screen">
      <section className="landing-hero relative">
        <header className="absolute inset-x-0 top-0 z-20">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-4 px-4 py-6 md:px-6">
            <Link to="/" className="inline-flex">
              <img
                src="/assets/logos/logo-white-horizontal.svg"
                alt="iCanchero"
                className="h-15"
              />
            </Link>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-4 py-25 text-center md:px-6">
          <div className="rise-in flex max-w-3xl flex-col items-center gap-5 text-white">
            <Badge variant="secondary">Próximamente en México</Badge>
            <h1 className="font-heading text-4xl leading-tight font-semibold italic md:text-6xl">
              El deporte nos une,
              <br /> iCanchero nos conecta.
            </h1>
            <p className="text-base text-white/90 md:text-xl">
              La mejor app para encontrar y reservar canchas deportivas.
              Organiza tus partidos en minutos.
            </p>
          </div>
        </div>
      </section>

      <div className="site-bg">
        <section className="_max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2">
            {posters.map((poster) => (
              <div
                key={poster}
                className="m-0 overflow-hidden rounded-none border-0 p-0"
              >
                <img
                  src={`/assets/images/posters/${poster}`}
                  alt={`Poster de la app: ${poster.replace('.jpg', '')}`}
                  className="h-full w-full rounded-none! object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  )
}

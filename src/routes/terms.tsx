import { createFileRoute, Link } from '@tanstack/react-router'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { SiteFooter } from '#/components/site-footer'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [{ title: 'Términos y Condiciones | iCanchero' }],
  }),
  component: TermsPage,
})

function TermsPage() {
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
              Términos y Condiciones de Uso
            </CardTitle>
            <CardDescription>
              Última actualización: 19 de mayo de 2025
            </CardDescription>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <p>
              Estos Términos regulan el uso de la aplicación móvil iCanchero y
              sus servicios relacionados. Al usar el servicio, usted acepta este
              documento.
            </p>

            <h3>1. Cuentas</h3>
            <p>
              Usted debe proporcionar información exacta y mantenerla
              actualizada. Es responsable de proteger sus credenciales y de toda
              actividad en su cuenta.
            </p>

            <h3>1.1 Nombres de usuario e identidad pública</h3>
            <p>
              Los nombres visibles, nombres de usuario, fotografías y demás
              elementos del perfil público no deben suplantar a otras personas,
              clubes o a iCanchero; generar confusión sobre una afiliación
              oficial; infringir derechos de terceros; ni utilizarse para
              fraude, acoso, abuso o actividades contrarias a estos términos.
            </p>
            <p>
              Los nombres de usuario se asignan para su uso dentro de iCanchero
              y no otorgan propiedad sobre un identificador específico. Podemos
              rechazar, reservar, suspender, reasignar o modificar un nombre de
              usuario cuando sea razonablemente necesario para prevenir
              suplantación, confusión, abuso, infracciones, riesgos de seguridad
              o incumplimientos legales. Cuando sea posible, notificaremos a la
              persona titular de la cuenta y facilitaremos un identificador de
              reemplazo.
            </p>

            <h3>2. Reservas y pagos</h3>
            <p>
              iCanchero facilita la reserva de canchas deportivas. Las
              condiciones específicas de cada reserva son definidas por cada
              proveedor y mostradas antes de confirmar.
            </p>
            <p>
              Los pagos se procesan mediante plataformas de terceros. No
              almacenamos el número completo de su tarjeta.
            </p>

            <h3>3. Propiedad intelectual</h3>
            <p>
              El servicio, su diseño, marca, contenido y funcionalidad son
              propiedad de iCanchero y/o sus licenciantes, protegidos por leyes
              aplicables.
            </p>

            <h3>4. Enlaces de terceros</h3>
            <p>
              Podemos incluir enlaces a sitios o servicios de terceros. No
              controlamos ni asumimos responsabilidad por su contenido o
              prácticas.
            </p>

            <h3>5. Terminación</h3>
            <p>
              Podemos suspender o terminar cuentas que incumplan estos términos,
              sin previo aviso, cuando corresponda.
            </p>

            <h3>6. Limitación de responsabilidad</h3>
            <p>
              En la medida permitida por ley, iCanchero no será responsable por
              daños indirectos, incidentales o consecuentes derivados del uso o
              imposibilidad de uso del servicio.
            </p>

            <h3>7. Descargo de responsabilidad</h3>
            <p>
              El servicio se proporciona “tal cual” y “según disponibilidad”,
              sin garantías explícitas o implícitas de ningún tipo.
            </p>

            <h3>8. Ley aplicable</h3>
            <p>
              Estos términos se rigen por las leyes de México, sin perjuicio de
              normas imperativas de protección al consumidor aplicables.
            </p>

            <h3>9. Cambios</h3>
            <p>
              Podemos modificar estos términos. La versión actualizada se
              publicará en esta página y entrará en vigor al momento de su
              publicación.
            </p>

            <h3>10. Contacto</h3>
            <p>
              iCanchero
              <br />
              icancheroapp@gmail.com
            </p>
          </CardContent>
        </Card>
      </div>
      <SiteFooter />
    </main>
  )
}

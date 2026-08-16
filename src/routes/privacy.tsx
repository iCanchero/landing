import { createFileRoute, Link } from '@tanstack/react-router'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { SiteFooter } from '#/components/site-footer'

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [{ title: 'Política de Privacidad | iCanchero' }],
  }),
  component: PrivacyPage,
})

function PrivacyPage() {
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
              Política de Privacidad
            </CardTitle>
            <CardDescription>
              Última actualización: 19 de mayo de 2025
            </CardDescription>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <p>
              Bienvenido a iCanchero. Nos comprometemos a proteger su
              información personal y su derecho a la privacidad. Si tiene alguna
              pregunta, puede escribirnos a icancheroapp@gmail.com.
            </p>

            <h3>1. ¿Qué información recopilamos?</h3>
            <p>
              Recopilamos información que usted proporciona al crear su cuenta,
              reservar canchas o comunicarse con nosotros, como datos de
              contacto, credenciales, nombre visible, nombre de usuario, foto de
              perfil, datos de pago y, con permiso, ubicación.
            </p>
            <p>
              También recopilamos información técnica de forma automática, como
              IP, dispositivo, sistema operativo, idioma, país y uso general de
              la aplicación.
            </p>

            <h3>2. ¿Cómo utilizamos su información?</h3>
            <ul>
              <li>Crear y gestionar cuentas.</li>
              <li>
                Mostrar el perfil público y permitir que otros jugadores lo
                encuentren o inviten mediante su nombre visible o nombre de
                usuario, sin mostrar su correo o teléfono.
              </li>
              <li>Gestionar reservas y pagos.</li>
              <li>Enviar comunicaciones operativas y promocionales.</li>
              <li>Proteger la seguridad de nuestros servicios.</li>
              <li>Cumplir obligaciones legales y regulatorias.</li>
            </ul>

            <h3>3. ¿Compartimos su información?</h3>
            <p>
              Solo compartimos datos cuando es necesario para prestar el
              servicio, cumplir la ley, proteger derechos o con su
              consentimiento.
            </p>

            <h3>4. Cookies y tecnologías de seguimiento</h3>
            <p>
              Podemos usar cookies o tecnologías similares para mejorar la
              experiencia, analizar uso y recordar preferencias.
            </p>

            <h3>5. Conservación de datos</h3>
            <p>
              Conservamos la información solo durante el tiempo necesario para
              los fines descritos o por obligación legal.
            </p>

            <h3>6. Seguridad</h3>
            <p>
              Aplicamos medidas técnicas y organizativas razonables para
              proteger sus datos. Aun así, ningún sistema en internet es 100%
              seguro.
            </p>

            <h3>7. Sus derechos de privacidad</h3>
            <p>
              Dependiendo de su jurisdicción, usted puede solicitar acceso,
              corrección, eliminación, limitación del tratamiento y, en su caso,
              portabilidad de sus datos.
            </p>

            <h3>8. Controles de no seguimiento</h3>
            <p>
              Algunos navegadores y sistemas ofrecen opciones de “No rastrear”.
              Nuestro soporte puede variar según tecnología y región.
            </p>

            <h3>9. Cambios en esta política</h3>
            <p>
              Podemos actualizar esta política. Publicaremos la versión vigente
              en esta página con su fecha de revisión.
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

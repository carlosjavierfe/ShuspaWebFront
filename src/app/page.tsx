export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Barra de navegación */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white text-xl font-bold">
            Shuspa Web
          </a>
          <div className="space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              Inicio
            </a>
            <a href="presupuesto" className="text-gray-300 hover:text-white">
              Presupuesto
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Ingesta
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Medicina
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* Encabezado */}
      <header className="bg-blue-600 text-white py-10">
        <div className="grid grid-cols-3 text-center">
          <div className="mt-8">
            <img
              src="/imagenes/WebShuspa.webp"
              alt="Logo Web Shuspa"
              className="h-20 w-auto mx-auto"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Shuspa Web</h1>
            <p className="text-lg mt-2">
              Un sitio web para llevar tus controles
            </p>
            <a
              href="#"
              className="mt-4 inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold"
            >
              Más información
            </a>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <section className="container mx-auto my-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">
              <a href="presupuesto" className="text-blue-600 hover:underline">
                Presupuesto
              </a>
            </h2>
            <p>
              Aquí podrás llevar un control completo de tus gastos, ingresos,
              egresos, metas de ahorro, gastos hormiga y mucho más.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">
              Control de Alimentos
            </h2>
            <p>
              Aquí podrás llevar un control detallado de los alimentos que
              consumes, incluyendo gramajes, seguimiento de lo que ya has
              ingerido, y establecer metas calóricas o proteicas personalizadas
              para alcanzar tus objetivos de salud.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">
              Control de Medicinas
            </h2>
            <p>
              Aquí podrás gestionar el control de tus medicinas, registrando los
              horarios de ingesta de tus pastillas y asegurándote de seguir al
              pie de la letra tu tratamiento.
            </p>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Shuspa Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

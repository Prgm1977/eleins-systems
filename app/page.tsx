export default function Home() {
  return (
<main
  className="min-h-screen text-white bg-cover bg-center bg-fixed"
  style={{
    backgroundImage:
      "linear-gradient(rgba(248, 244, 244, 0), rgba(0,0,0,0.85)), url('/fondo.png')",
  }}
>
 

  <nav className="relative w-full bg-black/40 backdrop-blur py-10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col items-center">

    <a
      href="mailto:eleinssystems@gmail.com"
      className="text-zinc-300 text-lg mb-4"
    >
      eleinssystems@gmail.com
    </a>

    <img
      src="/logo2.png"
      alt="Logo ELEINS SYSTEMS"
      className="w-[320px] md:w-[500px] h-auto object-contain"
    />

    <p className="text-center text-xl md:text-2xl max-w-4xl mt-6 font-semibold text-zinc-300">
      Fabricación de Tableros Eléctricos, Control Neumático,
      Soluciones para Procesos Productivos,
      Automatización y Control Industrial.
    </p>

    <div className="flex flex-wrap justify-center gap-4 mt-8">

      <a
        href="https://eleinssystems.cl/"
        target="_blank"
        className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold"
      >
        Sitio Web
      </a>

      <a
        href="https://instagram.com/"
        target="_blank"
        className="bg-pink-500 text-white px-6 py-3 rounded-2xl font-bold"
      >
        Instagram
      </a>

      <a
        href="https://wa.me/56984370601"
        target="_blank"
        className="bg-green-500 text-white px-6 py-3 rounded-2xl font-bold"
      >
        WhatsApp
      </a>

      <a
        href="https://maps.app.goo.gl/vXPx4HyGmVAH2jkA9"
        target="_blank"
        className="bg-red-500 text-white px-6 py-3 rounded-2xl font-bold"
      >
        Google Maps
      </a>

    </div>
  </div>
</nav>
      <section id="servicios" className="py-0 -translate-y-30 px-6 bg-zinc-150">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-yellow-400 mb-10 text-center">
            Nuestros Servicios
          </h2>

          <div className="grid md:grid grid-cols-1 gap-6">
            <div className="border border-yellow-400/80 rounded-1xl p-6 bg-bg-blackhover:border-yellow-400 hover:scale-105 transition duration-300 shadow-lg shadow-yellow-400/10">
              <h3 className="text-4xl font-bold mb-4">Tableros Eléctricos y de Control</h3>
             <p className="text-2xl font-semibold text-zinc-300 leading-relaxed">
Diseño, fabricación, armado y mantención de tableros eléctricos industriales y domiciliarios.
</p>
            </div>

            <div className="border border-yellow-400/80 rounded-2xl p-6 bg-blackhover:border-yellow-400 hover:scale-105 transition duration-300 shadow-lg shadow-yellow-400/10">
              <h3 className="text-4xl font-bold mb-4">Automatización y Control Industrial</h3>
              <p className="text-2xl font-semibold text-zinc-300 leading-relaxed">
                Integración de PLC, sensores, variadores de frecuencia y sistemas de control.
              </p>
            </div>

<div className="border border-yellow-400/80 rounded-2xl p-6 bg-blackhover:border-yellow-400 hover:scale-105 transition duration-300 shadow-lg shadow-yellow-400/10">
              <h3 className="text-4xl font-bold mb-4">Fabricación de Lamicoides</h3>
              <p className="text-2xl font-semibold text-zinc-300 leading-relaxed">
                Fabricación de placas de lamicoides y Señaleticas de Advertencia.
              </p>
            </div>

            <div className="border border-yellow-400/80 rounded-2xl p-6 bg-blackhover:border-yellow-400 hover:scale-105 transition duration-300 shadow-lg shadow-yellow-400/10">
              <h3 className="text-4xl font-bold mb-4">Puesta a Tierra</h3>
              <p className="text-2xl font-semibold text-zinc-300 leading-relaxed">
                Medicion, Diseño y Fabricacion de Puesta a Tierra.
              </p>
            </div>

<div className="border border-yellow-400/80 rounded-2xl p-6 bg-blackhover:border-yellow-400 hover:scale-105 transition duration-300 shadow-lg shadow-yellow-400/10">
              <h3 className="text-4xl font-bold mb-4">Canalizado y montajes eléctricos.</h3>
              <p className="text-2xl font-semibold text-zinc-300 leading-relaxed">
                Canalizado en EMT, EPC, Conduit SCH, CAG, Montajes eléctrico en general y Fabricación de banco ductos.
              </p>
            </div>

            <div className="border border-yellow-400/80 rounded-2xl p-6 bg-blackhover:border-yellow-400 hover:scale-105 transition duration-300 shadow-lg shadow-yellow-400/10">
              <h3 className="text-4xl font-bold mb-4">Electricidad Industrial y Domiciliaria.</h3>
              <p className="text-xl font-semibold text-zinc-300 leading-relaxed">
                 Fabricación de Empalmes, Cercos Electricos, Domotica, Sistemas Control Incendios, Control de Motores, Portones Eléctricos.
                 
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-24 px-6">
        <div className="max-w-4xl ml-230 mx-auto -translate-y-30 text-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            SOLUCIONES INDUSTRIALES CONFIABLES.
          </h2>

<p className="translate-y-1 mt-2 ml-0 mr-0 text-metalic px-0 py-0 rounded-2xl text-3xl font-bold hover:scale-95 transition">
            En ELEINS SYSTEMS entregamos soluciones orientadas a la Seguridad, Calidad, 
            Eficiencia, Continuidad Operacional, Apoyando a Empresas que necesitan
            mejorar sus procesos eléctricos, automáticos y neumáticos.                                          
                        Nos ubicamos en ruta Ch41, la Serena, camino al Valle 
          </p>


          
         
        </div>
      </section>

      <a 
 
 
  
>
  
</a>
    </main>
  );
}
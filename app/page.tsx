export default function Home() {
  return (
<main
  className="min-h-screen text-white bg-cover bg-center bg-fixed"
  style={{
    backgroundImage:
      "linear-gradient(rgba(248, 244, 244, 0), rgba(0,0,0,0.85)), url('/fondo.png')",
  }}
>
 

  <div className="fixed top-0 left-0 w-full bg-black/80 ...">
  

  <div className="absolute inset-0 bg-black/80"></div>
</div> <nav className="fixed top-0 left-45 w-full bg-black/10 backdrop-blur border-b border-yellow-400/0 z-50">
        <div className="max-w-25xl mx-auto px-18 py-16 flex justify-between items-center">
          
          <div className="hidden md:flex gap-50 text-lg font-semibold">
            <a href="#eleinssystems@gmail.com" className="text-5xl  md:text-ml-10 mt-6 text-zinc-300">eleinssystems@gmail.cl</a>
           <img
  src="/fondo Chile.png"
  alt="fondo Chile"
className="-ml-170 mt-1 w-100 mr-1 y-400"
/>
          </div>
        </div>
      </nav>

<section className="relative z-70 pt-10 pb-2 flex flex-col items-center bg-gradient-to-b from-zinc-900/40 to-transparent">
<img
  src="/logo2.png"
  alt="Logo ELEINS SYSTEMS"
className="w-300 md:w-296 mx-auto mb-2 rounded-2xl"
/>
  

       <p className="text-5x1 md:text-4xl max-w-15xl mb-8 font-semibold text-metalic-400"> 
          Fabricación de Tableros Eléctricos, Control Neumático, Soluciones para Procesos Productivos, Automatización y Control industrial.
        </p>

      <a
 
  
><a
  href="https://eleins-systems.vercel.app/"
  target="_blank"
  className="inline-block translate-y-15 mt-3 ml-6 mr-240 bg-yellow-400 text-black px-8 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition"
>
  Visitar Sitio 
</a>
 
</a>
   <a
  href="https://instagram.com/"
  target="_blank"
  className="inline-block mt-0 50-20 ml-40 mr-100 -translate-y-0 bg-pink-500 text-white px-8 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition"
>
  Instagram
</a>   
 <a
  href="https://wa.me/56984370601"
  target="_blank"
  className="inline-block -translate-y-20 mb-10 mr-150 mt-6 ml-250 bg-green-500 text-white px-8 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition"
>
  WhatsApp
</a>

 <a
  href="https://maps.app.goo.gl/vXPx4HyGmVAH2jkA9"
  target="_blank"
  className="inline-block -translate-y-50 mb-10 mt-6 ml-250 bg-red-500 text-white px-8 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition"
>
  Google maps
</a>


</section>
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
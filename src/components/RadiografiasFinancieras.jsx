import React, { useState } from 'react';
import { Download, Menu, X, Phone, Mail, FileText, Calendar, BarChart2, Users, FileSpreadsheet, TrendingUp, Calculator } from 'lucide-react';

const RadiografiasFinancieras = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const servicios = [
    {
      id: 1,
      titulo: '"SDF" SISTEMA PARA RADIOGRAFIAS FINANCIERAS- DIAGNÓSTICO',
      descripcion: 'Evaluación completa del estado financiero de su empresa.',
      icono: <BarChart2 size={36} className="text-green-600 mb-4" />
    },
    {
      id: 2,
      titulo: 'SERVICIOS SUBCONTRATADOS DE CONTRALORÍA Y DIRECCIÓN FINANCIERA. CONTROLLER & CFO OUTSOURCING.',
      descripcion: 'Gestión financiera profesional sin necesidad de contratar personal de tiempo completo.',
      icono: <Users size={36} className="text-green-600 mb-4" />
    },
    {
      id: 3,
      titulo: 'BPM- BUSINESS PROCESS MANAGMENT',
      descripcion: 'Optimización de procesos empresariales para mejorar la eficiencia operativa.',
      icono: <FileSpreadsheet size={36} className="text-green-600 mb-4" />
    },
    {
      id: 4,
      titulo: 'PROCESO DE CONTABILIDAD Y ESTADOS FINANCIEROS',
      descripcion: 'Elaboración y análisis de estados financieros con los más altos estándares.',
      icono: <BarChart2 size={36} className="text-green-600 mb-4" />
    },
    {
      id: 5,
      titulo: '"SPF" SISTEMA PARA PROYECCIONES DE ESTADOS FINANCIEROS',
      descripcion: 'Proyecciones financieras precisas para planificación estratégica.',
      icono: <TrendingUp size={36} className="text-green-600 mb-4" />
    },
    {
      id: 6,
      titulo: 'ANÁLISIS DE IMPUESTOS',
      descripcion: 'Optimización fiscal y cumplimiento tributario para su empresa.',
      icono: <Calculator size={36} className="text-green-600 mb-4" />
    }
  ];

  const recursos = [
    {
      id: 1,
      titulo: 'MENU DE SERVICIOS PROFESIONALES DE CONTADURIA Y FINANZAS',
      boton: 'Descargar PDF'
    },
    {
      id: 2,
      titulo: 'PROLOGO DE DIAGNOSTICO FINANCIERO Y CALIFICACION CREDITICIA',
      boton: 'Descargar PDF'
    },
    {
      id: 3,
      titulo: 'PERFIL PROFESIONAL',
      boton: 'Descargar PDF'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Barra de navegación */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
              <img src="/logo.png" alt="Radiografías Financieras Logo" className="h-10 w-auto mr-2" />
                <div className="">
                
                </div>
                <span className="text-2xl font-bold text-black">RADIOGRAFÍAS<span className="text-green-600">FINANCIERAS</span></span>
              </div>
            </div>
            
            {/* Menú de escritorio */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#inicio" className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-green-600">Inicio</a>
              <a href="#servicios" className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-green-600">Servicios</a>
              <a href="#recursos" className="px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:text-red-700">Recursos</a>
              <a href="#contacto" className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-green-600">Contacto</a>
            </div>
            
            {/* Botón de menú móvil */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="p-2 rounded-md text-black hover:text-green-600 focus:outline-none">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Menú móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#inicio" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-green-600">Inicio</a>
              <a href="#servicios" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-green-600">Servicios</a>
              <a href="#recursos" className="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-red-700">Recursos</a>
              <a href="#contacto" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-green-600">Contacto</a>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <div id="inicio" className="relative overflow-hidden bg-gray-50 py-16 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 rounded-lg shadow-lg border border-gray-100">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Soluciones financieras</span>
                  <span className="block text-green-600">para su empresa</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto md:mt-5 md:text-xl">
                  En Radiografías Financieras ofrecemos servicios especializados que le permitirán tomar decisiones estratégicas basadas en información financiera precisa y actualizada.
                </p>
                <div className="mt-5 sm:mt-8 flex justify-center mb-10">
                  <div className="rounded-md shadow">
                    <a href="#contacto" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                      Solicitar Consultoría
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Carrusel de logos de empresas */}
      <div className="bg-white py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-medium text-gray-900">Empresas que han confiado en mí:</h3>
          </div>
          <div className="relative overflow-hidden py-4">
            <div className="inline-flex flex-nowrap animate-marquee">
              <div className="flex items-center justify-around mr-8 md:mr-16 whitespace-nowrap">
                <img src="/placeholder/cisco.png" alt="Cisco" className="h-10 md:h-12 object-contain mx-4 md:mx-8" />
                <img src="/placeholder/expansion.png" alt="Expansion" className="h-10 md:h-12 object-contain mx-4 md:mx-8" />
                <img src="/placeholder/fedex.png" alt="FedEx" className="h-10 md:h-12 object-contain mx-4 md:mx-8" />
                <img src="/placeholder/heineken.png" alt="Heineken" className="h-10 md:h-12 object-contain mx-4 md:mx-8" />
                <img src="/placeholder/santander.png" alt="Santander" className="h-10 md:h-12 object-contain mx-4 md:mx-8" />
                <img src="/placeholder/tec.png" alt="Tecnológico de Monterrey" className="h-10 md:h-12 object-contain mx-4 md:mx-8" />
              </div>
              <div className="flex items-center justify-around whitespace-nowrap">
                <img src="/placeholder/cisco.png" alt="Cisco" className="h-10 md:h-12 object-contain mx-4 md:mx-8" />
                <img src="/placeholder/expansion.png" alt="Expansion" className="h-10 md:h-12 object-contain mx-4 md:mx-8" />
                <img src="/placeholder/fedex.png" alt="FedEx" className="h-10 md:h-12 object-contain mx-4 md:mx-8" />
                <img src="/placeholder/heineken.png" alt="Heineken" className="h-10 md:h-12 object-contain mx-4 md:mx-8" />
                <img src="/placeholder/santander.png" alt="Santander" className="h-10 md:h-12 object-contain mx-4 md:mx-8" />
                <img src="/placeholder/tec.png" alt="Tecnológico de Monterrey" className="h-10 md:h-12 object-contain mx-4 md:mx-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Servicios */}
      <div id="servicios" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gray-50 py-8 rounded-lg shadow-md mb-10">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Nuestras soluciones</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Servicios financieros especializados
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Ofrecemos una gama completa de servicios diseñados para optimizar la gestión financiera de su empresa.
            </p>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {servicios.map((servicio) => (
                <div key={servicio.id} className="bg-white overflow-hidden shadow rounded-lg border-l-4 border-green-600 hover:shadow-lg transition duration-300">
                  <div className="px-4 py-5 sm:p-6 flex flex-col items-center text-center">
                    {servicio.icono}
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{servicio.titulo}</h3>
                    <div className="mt-2 text-sm text-gray-500">
                      <p>{servicio.descripcion}</p>
                    </div>
                    <div className="mt-4">
                      <a href="#contacto" className="text-sm font-medium text-green-600 hover:text-green-500">
                        Solicitar información <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recursos */}
      <div id="recursos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-white py-8 rounded-lg shadow-md mb-10">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Material informativo</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Recursos
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Descargue documentos informativos sobre nuestros servicios y expertise.
            </p>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {recursos.map((recurso) => (
                <div key={recurso.id} className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                  <div className="px-4 py-5 sm:p-6 flex flex-col items-center text-center h-full">
                    <FileText size={48} className="text-green-600 mb-4" />
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">{recurso.titulo}</h3>
                    <div className="mt-auto pt-4">
                      <button className="flex items-center px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition duration-150 ease-in-out">
                        <Download size={16} className="mr-2" />
                        {recurso.boton}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Sección de contacto */}
      <div id="contacto" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gray-50 py-8 rounded-lg shadow-md mb-10">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Nos encantaría saber de usted</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Contáctenos
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Estamos listos para ayudarle a optimizar la gestión financiera de su empresa.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Información de contacto
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Contáctenos hoy mismo para una consulta inicial sin compromiso.
              </p>
              <div className="mt-8 flex">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+504 98342166</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>radiografiasfinancieras@gmail.com</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Horario de atención</h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                  <p>Sábados: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white py-10 px-6 shadow-md rounded-lg sm:px-10 border border-gray-200">
                <h3 className="text-xl font-medium text-gray-900 mb-6 border-b border-gray-200 pb-3">Solicite una consultoría</h3>
                <form className="mb-0 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre completo</label>
                    <div className="mt-1">
                      <input type="text" name="name" id="name" className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Nombre de la empresa</label>
                    <div className="mt-1">
                      <input type="text" name="company" id="company" className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                    <div className="mt-1">
                      <input type="email" name="email" id="email" className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <div className="mt-1">
                      <input type="tel" name="phone" id="phone" className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">Servicio de interés</label>
                    <div className="mt-1">
                      <select id="service" name="service" className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border">
                        <option value="">Seleccione un servicio</option>
                        <option value="diagnostico">SDF - Sistema para Radiografías Financieras</option>
                        <option value="cfo">Servicios Subcontratados de Contraloría y Dirección Financiera</option>
                        <option value="bpm">BPM - Business Process Management</option>
                        <option value="estados">Proceso de Contabilidad y Estados Financieros</option>
                        <option value="proyecciones">SPF - Sistema para Proyecciones de Estados Financieros</option>
                        <option value="impuestos">Análisis de Impuestos</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                    <div className="mt-1">
                      <textarea id="message" name="message" rows="4" className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"></textarea>
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      Enviar solicitud
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">RADIOGRAFÍAS<span className="text-green-400">FINANCIERAS</span></span>
            </div>
            <div className="mt-8 md:mt-0">
              <a href="#inicio" className="text-gray-300 hover:text-white mx-3">Inicio</a>
              <a href="#servicios" className="text-gray-300 hover:text-white mx-3">Servicios</a>
              <a href="#recursos" className="text-red-400 hover:text-white mx-3">Recursos</a>
              <a href="#contacto" className="text-gray-300 hover:text-white mx-3">Contacto</a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {/* Iconos de redes sociales irían aquí */}
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2025 Radiografías Financieras. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RadiografiasFinancieras;
import React from 'react';
import { ArrowLeft, Droplets, Leaf, Wind, Sparkles, Brain, Heart, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Aromaterapia = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'Equilibrio Mental',
      description: 'Calma la mente y reduce el estrés mediante aromas terapéuticos naturales'
    },
    {
      icon: Heart,
      title: 'Bienestar Emocional',
      description: 'Armoniza las emociones y promueve estados de paz y serenidad'
    },
    {
      icon: Shield,
      title: 'Fortalece Defensas',
      description: 'Algunos aceites esenciales apoyan el sistema inmunológico naturalmente'
    },
    {
      icon: Zap,
      title: 'Energía Vital',
      description: 'Revitaliza el cuerpo y la mente con la fuerza de la naturaleza'
    }
  ];

  const essentialOils = [
    {
      name: 'Lavanda',
      properties: 'Relajante, calmante, favorece el sueño',
      uses: 'Ansiedad, insomnio, estrés',
      color: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Eucalipto',
      properties: 'Descongestionante, purificante, energizante',
      uses: 'Problemas respiratorios, concentración',
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'Menta',
      properties: 'Refrescante, estimulante, digestiva',
      uses: 'Dolores de cabeza, náuseas, fatiga mental',
      color: 'from-teal-400 to-teal-600'
    },
    {
      name: 'Rosa',
      properties: 'Equilibrante, afrodisíaca, regeneradora',
      uses: 'Depresión, autoestima, cuidado de la piel',
      color: 'from-pink-400 to-pink-600'
    },
    {
      name: 'Sándalo',
      properties: 'Meditativo, calmante, espiritual',
      uses: 'Meditación, ansiedad, conexión espiritual',
      color: 'from-amber-400 to-amber-600'
    },
    {
      name: 'Bergamota',
      properties: 'Antidepresiva, equilibrante, uplifting',
      uses: 'Depresión, estrés, confianza',
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  const applications = [
    {
      title: 'Difusión Ambiental',
      description: 'Purifica y aromatiza espacios creando ambientes terapéuticos',
      icon: Wind
    },
    {
      title: 'Masajes Terapéuticos',
      description: 'Combinación de tacto sanador con propiedades aromáticas',
      icon: Heart
    },
    {
      title: 'Inhalación Directa',
      description: 'Método rápido para obtener beneficios inmediatos',
      icon: Leaf
    },
    {
      title: 'Baños Aromáticos',
      description: 'Relajación profunda a través de la inmersión sensorial',
      icon: Droplets
    }
  ];

  const therapeuticAreas = [
    {
      area: 'Estrés y Ansiedad',
      description: 'Aceites como lavanda, bergamota y manzanilla para calmar el sistema nervioso',
      oils: ['Lavanda', 'Bergamota', 'Manzanilla', 'Ylang-ylang']
    },
    {
      area: 'Sueño y Descanso',
      description: 'Esencias que favorecen la relajación profunda y el sueño reparador',
      oils: ['Lavanda', 'Sándalo', 'Cedro', 'Valeriana']
    },
    {
      area: 'Concentración y Claridad',
      description: 'Aromas estimulantes que mejoran el enfoque y la productividad mental',
      oils: ['Romero', 'Menta', 'Eucalipto', 'Limón']
    },
    {
      area: 'Equilibrio Emocional',
      description: 'Aceites que armonizan las emociones y promueven el bienestar integral',
      oils: ['Rosa', 'Geranio', 'Neroli', 'Jazmín']
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      <main className="overflow-x-hidden pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-healing py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button positioned at top left */}
            <div className="mb-8">
              <Link 
                to="/" 
                className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 hover:bg-primary/30 rounded-full text-primary hover:text-primary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-primary-light to-secondary p-4 rounded-full">
                  <Droplets className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-text-primary mb-6">
                Aromaterapia
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Descubre el poder sanador de los aceites esenciales para equilibrar cuerpo, 
                mente y espíritu a través de la sabiduría ancestral de las plantas.
              </p>
            </div>
          </div>
        </section>

        {/* What is Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                  La Sabiduría de los Aceites Esenciales
                </h2>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  La aromaterapia es una práctica terapéutica milenaria que utiliza aceites esenciales 
                  extraídos de plantas aromáticas para promover el bienestar físico, mental y emocional. 
                  Estos aceites concentrados contienen las propiedades curativas y energéticas de las plantas.
                </p>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  En Centro BZEN, integramos la aromaterapia como una herramienta complementaria 
                  poderosa que actúa a través del sistema olfativo, conectando directamente con 
                  el sistema límbico del cerebro, donde se procesan las emociones y los recuerdos.
                </p>
              </div>
              
              <div className="bg-gradient-healing p-8 rounded-2xl">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-full inline-block mb-6">
                    <Leaf className="h-16 w-16 text-primary-light" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    Esencias Naturales
                  </h3>
                  <p className="text-text-secondary">
                    La fuerza vital de las plantas al servicio de tu bienestar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Beneficios de la Aromaterapia
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Descubre cómo los aceites esenciales pueden transformar tu bienestar integral
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="bg-gradient-to-r from-primary-light to-secondary p-4 rounded-full w-fit mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-text-primary mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Essential Oils Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Aceites Esenciales Principales
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Conoce las propiedades y usos de nuestros aceites esenciales más utilizados
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {essentialOils.map((oil, index) => (
                <div key={index} className="bg-gradient-healing p-8 rounded-2xl hover:shadow-card-hover transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${oil.color} rounded-full flex items-center justify-center mb-6`}>
                    <Droplets className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    {oil.name}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    <strong>Propiedades:</strong> {oil.properties}
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    <strong>Usos:</strong> {oil.uses}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Métodos de Aplicación
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Diferentes formas de incorporar la aromaterapia en tu vida diaria
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card text-center">
                  <div className="bg-gradient-to-r from-primary-light to-secondary p-4 rounded-full w-fit mx-auto mb-6">
                    <application.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-text-primary mb-4">
                    {application.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {application.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Therapeutic Areas Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Áreas Terapéuticas
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Aplicaciones específicas de la aromaterapia para diferentes necesidades
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {therapeuticAreas.map((area, index) => (
                <div key={index} className="bg-gradient-healing p-8 rounded-2xl">
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    {area.area}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.oils.map((oil, oilIndex) => (
                      <span 
                        key={oilIndex} 
                        className="bg-white px-3 py-1 rounded-full text-sm text-text-secondary font-medium"
                      >
                        {oil}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-card">
              <div className="flex justify-center mb-6">
                <Shield className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-3xl font-playfair font-bold text-text-primary mb-6">
                Uso Seguro y Responsable
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                En Centro BZEN, priorizamos el uso seguro de los aceites esenciales. Siempre 
                diluimos adecuadamente los aceites, realizamos pruebas de sensibilidad y 
                proporcionamos orientación profesional para cada aplicación.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-gradient-healing p-4 rounded-xl">
                  <h4 className="font-semibold text-text-primary mb-2">Dilución Apropiada</h4>
                  <p className="text-sm text-text-secondary">Siempre diluimos los aceites en aceites portadores seguros</p>
                </div>
                <div className="bg-gradient-healing p-4 rounded-xl">
                  <h4 className="font-semibold text-text-primary mb-2">Calidad Garantizada</h4>
                  <p className="text-sm text-text-secondary">Utilizamos aceites esenciales puros y de grado terapéutico</p>
                </div>
                <div className="bg-gradient-healing p-4 rounded-xl">
                  <h4 className="font-semibold text-text-primary mb-2">Orientación Profesional</h4>
                  <p className="text-sm text-text-secondary">Asesoramiento personalizado para cada necesidad</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-6">
              ¿Listo para Experimentar la Aromaterapia?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Descubre el poder transformador de los aceites esenciales y cómo pueden 
              equilibrar tu bienestar físico, mental y emocional de forma natural.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contacto" 
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center"
              >
                Reservar Sesión
              </Link>
              <Link 
                to="/" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center"
              >
                Ver Más Terapias
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Aromaterapia;

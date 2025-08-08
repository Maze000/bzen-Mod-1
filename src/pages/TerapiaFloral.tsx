import React from 'react';
import { ArrowLeft, Flower, Heart, Droplets, Leaf, Sun, Moon, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TerapiaFloral = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Equilibrio Emocional',
      description: 'Armoniza estados emocionales profundos y patrones de comportamiento'
    },
    {
      icon: Leaf,
      title: 'Sanación Natural',
      description: 'Utiliza la sabiduría de las plantas para restaurar el bienestar integral'
    },
    {
      icon: Sun,
      title: 'Claridad Mental',
      description: 'Despeja la mente de pensamientos limitantes y patrones negativos'
    },
    {
      icon: Moon,
      title: 'Paz Interior',
      description: 'Cultiva un estado de serenidad y conexión con tu esencia'
    }
  ];

  const applications = [
    {
      title: 'Ansiedad y Estrés',
      description: 'Fórmulas específicas para calmar el sistema nervioso y encontrar equilibrio emocional',
      color: 'from-primary to-primary-light'
    },
    {
      title: 'Procesos de Duelo',
      description: 'Acompañamiento floral para transitar pérdidas y transformaciones de vida',
      color: 'from-secondary to-secondary-light'
    },
    {
      title: 'Miedos y Bloqueos',
      description: 'Esencias que ayudan a liberar patrones de miedo y limitaciones autoimpuestas',
      color: 'from-accent to-accent-light'
    },
    {
      title: 'Crisis Existenciales',
      description: 'Apoyo floral para momentos de búsqueda de sentido y propósito de vida',
      color: 'from-primary-light to-secondary'
    },
    {
      title: 'Relaciones Interpersonales',
      description: 'Flores que facilitan la comunicación, el perdón y vínculos saludables',
      color: 'from-secondary to-accent'
    },
    {
      title: 'Niños Alta Sensibilidad',
      description: 'Fórmulas especiales para niños sensibles y sus procesos de adaptación',
      color: 'from-accent to-primary'
    }
  ];

  const bachFlowers = [
    { name: 'Rescue Remedy', use: 'Emergencias emocionales' },
    { name: 'Mimulus', use: 'Miedos conocidos' },
    { name: 'Rock Rose', use: 'Terror y pánico' },
    { name: 'Impatiens', use: 'Impaciencia e irritabilidad' },
    { name: 'Cherry Plum', use: 'Pérdida de control' },
    { name: 'Aspen', use: 'Miedos vagos' },
    { name: 'Red Chestnut', use: 'Preocupación excesiva por otros' },
    { name: 'White Chestnut', use: 'Pensamientos repetitivos' }
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
                <div className="bg-gradient-to-r from-accent to-accent-light p-4 rounded-full">
                  <Flower className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-text-primary mb-6">
                🌸 Terapia Floral
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Una herramienta central en el acompañamiento emocional y espiritual que utiliza 
                la sabiduría de las flores para armonizar cuerpo, mente y alma.
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
                  El Legado del Dr. Edward Bach
                </h2>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  En Centro BZEN, la Terapia Floral está basada en el legado del Dr. Edward Bach 
                  y enriquecida con otras líneas contemporáneas. Esta terapia utiliza esencias 
                  florales que actúan sutilmente sobre nuestros cuerpos físico, mental, emocional y energético.
                </p>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  A través de una entrevista terapéutica profunda y empática, identificamos los 
                  estados emocionales que necesitan ser armonizados. Como terapeuta floral certificada 
                  y guía en procesos de expansión de conciencia, canalizo fórmulas personalizadas 
                  que acompañan tus procesos de vida.
                </p>
              </div>
              
              <div className="bg-gradient-healing p-8 rounded-2xl">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-full inline-block mb-6">
                    <Droplets className="h-16 w-16 text-accent" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    Esencias Florales
                  </h3>
                  <p className="text-text-secondary">
                    La vibración sutil de las flores para sanar el alma
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
                Beneficios de la Terapia Floral
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Descubre cómo las esencias florales pueden transformar tu bienestar emocional
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="bg-gradient-to-r from-accent to-accent-light p-4 rounded-full w-fit mb-6">
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

        {/* Applications Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Aplicaciones Terapéuticas
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Fórmulas personalizadas para acompañar diferentes procesos de vida
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((application, index) => (
                <div key={index} className="bg-gradient-healing p-8 rounded-2xl hover:shadow-card-hover transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${application.color} rounded-full flex items-center justify-center mb-6`}>
                    <Flower className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
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

        {/* Bach Flowers Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Principales Flores de Bach
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Algunas de las esencias más utilizadas en nuestras fórmulas terapéuticas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bachFlowers.map((flower, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-card text-center">
                  <div className="bg-gradient-to-r from-accent to-accent-light p-3 rounded-full w-fit mx-auto mb-4">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-playfair font-bold text-text-primary mb-2">
                    {flower.name}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {flower.use}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Proceso Terapéutico
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Un acompañamiento personalizado para tu sanación emocional
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-primary to-primary-light p-6 rounded-full w-fit mx-auto mb-6">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-text-primary mb-4">
                  1. Entrevista Terapéutica
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Conversación profunda y empática para identificar estados emocionales 
                  y patrones que necesitan armonización.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-secondary to-secondary-light p-6 rounded-full w-fit mx-auto mb-6">
                  <Droplets className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-text-primary mb-4">
                  2. Fórmula Personalizada
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Canalización de una mezcla única de esencias florales específicas 
                  para tu proceso de sanación actual.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-accent to-accent-light p-6 rounded-full w-fit mx-auto mb-6">
                  <Leaf className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-text-primary mb-4">
                  3. Acompañamiento
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Seguimiento del proceso y ajustes en la fórmula según tu evolución 
                  emocional y espiritual.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-6">
              ¿Listo para Sanar con Flores?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Inicia tu proceso de sanación emocional con la sabiduría ancestral de las flores. 
              Descubre el equilibrio y la paz que tu alma necesita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contacto" 
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center"
              >
                Reservar Consulta
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

export default TerapiaFloral;

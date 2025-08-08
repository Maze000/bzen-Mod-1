import React from 'react';
import { ArrowLeft, Heart, Eye, Compass, Star, Moon, Sun, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TarotTerapeutico = () => {
  const benefits = [
    {
      icon: Eye,
      title: 'Autoconocimiento Profundo',
      description: 'Revela aspectos ocultos de tu personalidad y patrones de comportamiento'
    },
    {
      icon: Compass,
      title: 'Orientación y Claridad',
      description: 'Proporciona dirección en momentos de confusión o incertidumbre'
    },
    {
      icon: Heart,
      title: 'Sanación Emocional',
      description: 'Facilita la comprensión y sanación de heridas emocionales profundas'
    },
    {
      icon: Star,
      title: 'Conexión Espiritual',
      description: 'Fortalece tu vínculo con la sabiduría interior y la intuición'
    }
  ];

  const applications = [
    {
      title: 'Momentos de Crisis',
      description: 'Encuentra claridad y perspectiva durante períodos difíciles de tu vida',
      icon: Moon,
      color: 'from-primary to-primary-light'
    },
    {
      title: 'Toma de Decisiones',
      description: 'Obtén insights para tomar decisiones importantes desde la sabiduría del corazón',
      icon: Compass,
      color: 'from-secondary to-secondary-light'
    },
    {
      title: 'Cierre de Ciclos',
      description: 'Comprende y libera patrones que ya no te sirven en tu evolución',
      icon: Sun,
      color: 'from-accent to-accent-light'
    },
    {
      title: 'Sanación Emocional',
      description: 'Identifica y sana heridas emocionales que afectan tu bienestar presente',
      icon: Heart,
      color: 'from-primary-light to-secondary'
    },
    {
      title: 'Conexión Espiritual',
      description: 'Profundiza tu relación con tu ser interior y propósito de vida',
      icon: Star,
      color: 'from-secondary to-accent'
    },
    {
      title: 'Reconexión Personal',
      description: 'Reencuentra tu esencia y autenticidad en medio del ruido cotidiano',
      icon: Sparkles,
      color: 'from-accent to-primary'
    }
  ];

  const tarotArcanas = [
    {
      name: 'El Loco',
      meaning: 'Nuevos comienzos, espontaneidad, fe en el proceso',
      lesson: 'Confía en tu intuición y atrévete a dar el primer paso'
    },
    {
      name: 'La Muerte',
      meaning: 'Transformación, finales necesarios, renacimiento',
      lesson: 'Abraza los cambios como oportunidades de crecimiento'
    },
    {
      name: 'La Estrella',
      meaning: 'Esperanza, inspiración, conexión espiritual',
      lesson: 'Mantén la fe en tu camino y confía en la guía divina'
    },
    {
      name: 'El Sol',
      meaning: 'Alegría, éxito, vitalidad, claridad',
      lesson: 'Celebra tus logros y permite que tu luz interior brille'
    },
    {
      name: 'La Luna',
      meaning: 'Intuición, misterio, mundo inconsciente',
      lesson: 'Explora tus sueños y confía en tu sabiduría intuitiva'
    },
    {
      name: 'El Mundo',
      meaning: 'Completitud, logro, integración, plenitud',
      lesson: 'Reconoce tu crecimiento y celebra tu evolución personal'
    }
  ];

  const sessionProcess = [
    {
      step: '1',
      title: 'Preparación Sagrada',
      description: 'Creamos un espacio seguro y sagrado, conectando con la intención de la consulta'
    },
    {
      step: '2',
      title: 'Lectura Intuitiva',
      description: 'Las cartas se revelan como un espejo de tu alma, mostrando lo que necesitas ver'
    },
    {
      step: '3',
      title: 'Interpretación Compasiva',
      description: 'Exploramos juntos los mensajes desde una perspectiva amorosa y evolutiva'
    },
    {
      step: '4',
      title: 'Integración y Herramientas',
      description: 'Recibes orientación práctica para integrar los insights en tu vida diaria'
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      <main className="overflow-x-hidden pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-healing py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link 
                to="/" 
                className="inline-flex items-center text-primary hover:text-primary-light mb-8 transition-colors"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Volver al inicio
              </Link>
              
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-secondary to-accent p-4 rounded-full">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-text-primary mb-6">
                Tarot Terapéutico
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Una herramienta de autoconocimiento, guía y transformación que conecta con tu alma 
                desde una perspectiva espiritual y evolutiva.
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
                  Un Espejo del Alma
                </h2>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  El Tarot Terapéutico en Centro BZEN es una herramienta de autoconocimiento, guía y transformación. 
                  A diferencia de la lectura predictiva tradicional, esta práctica se basa en una mirada profunda 
                  y compasiva del presente, conectando con tu alma y tus procesos internos.
                </p>
                <p className="text-body text-text-secondary mb-6 leading-relaxed">
                  A través de una lectura consciente, el tarot revela los bloqueos, patrones, heridas y también 
                  los potenciales que habitan en ti. Es un espejo del alma que facilita el entendimiento de lo 
                  que estás viviendo, entregándote claridad, orientación y herramientas para avanzar con mayor conciencia.
                </p>
                <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-4 rounded-xl">
                  <p className="text-text-primary font-medium italic">
                    "Este tarot no dicta tu destino: te devuelve tu poder, invitándote a tomar decisiones 
                    desde la sabiduría de tu corazón."
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-healing p-8 rounded-2xl">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-full inline-block mb-6">
                    <Eye className="h-16 w-16 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-text-primary mb-4">
                    Sabiduría Interior
                  </h3>
                  <p className="text-text-secondary">
                    Conecta con tu intuición y la guía de tu alma
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
                Beneficios del Tarot Terapéutico
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Descubre cómo esta antigua sabiduría puede transformar tu perspectiva de vida
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="bg-gradient-to-r from-secondary to-accent p-4 rounded-full w-fit mb-6">
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
                ¿Cuándo Consultar el Tarot?
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                🌿 Ideal para momentos de crisis, toma de decisiones, cierre de ciclos, sanación emocional, 
                conexión espiritual o simplemente para reconectar contigo misma/o.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((application, index) => (
                <div key={index} className="bg-gradient-healing p-8 rounded-2xl hover:shadow-card-hover transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${application.color} rounded-full flex items-center justify-center mb-6`}>
                    <application.icon className="h-8 w-8 text-white" />
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

        {/* Arcanas Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-text-primary mb-6">
                Sabiduría de los Arcanos
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Algunos de los arcanos mayores y sus mensajes de transformación
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tarotArcanas.map((arcana, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-card text-center">
                  <div className="bg-gradient-to-r from-secondary to-accent p-4 rounded-full w-fit mx-auto mb-6">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-text-primary mb-4">
                    {arcana.name}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    <strong>Significado:</strong> {arcana.meaning}
                  </p>
                  <p className="text-text-secondary text-sm italic">
                    {arcana.lesson}
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
                Proceso de la Sesión
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Un viaje sagrado hacia tu autoconocimiento y transformación
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sessionProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-secondary to-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-text-primary mb-4">
                    {process.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 lg:py-24 bg-background-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-card">
              <div className="flex justify-center mb-6">
                <Heart className="h-12 w-12 text-secondary" />
              </div>
              <h2 className="text-3xl font-playfair font-bold text-text-primary mb-6">
                Nuestra Filosofía
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                En Centro BZEN, el Tarot Terapéutico se practica desde una perspectiva amorosa y evolutiva. 
                No buscamos predecir el futuro, sino iluminar el presente para que puedas tomar decisiones 
                conscientes y alineadas con tu verdadero ser.
              </p>
              <div className="bg-gradient-healing p-6 rounded-xl">
                <p className="text-lg font-playfair font-semibold text-text-primary mb-4">
                  "El tarot no te dice qué hacer, te ayuda a recordar quién eres"
                </p>
                <p className="text-text-secondary">
                  Cada carta es una invitación a la reflexión, al autoconocimiento y a la transformación consciente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-6">
              ¿Listo para Conectar con tu Sabiduría Interior?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Permite que el tarot sea tu espejo del alma y descubre los mensajes que tu ser 
              interior tiene para compartir contigo en este momento de tu vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contacto" 
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center"
              >
                Reservar Lectura
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

export default TarotTerapeutico;
